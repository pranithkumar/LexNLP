from flask import Flask,render_template,request
from collections import Counter
import lexnlp.extract.en.dates
import lexnlp.extract.en.trademarks
import lexnlp.extract.en.durations
import lexnlp.extract.en.geoentities
import lexnlp.extract.en.percents
import lexnlp.extract.en.money
import lexnlp.extract.en.entities.nltk_maxent
import lexnlp.extract.en.amounts

app = Flask(__name__, template_folder='.',static_url_path='',static_folder='./static')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

def tupleToList(data):
	for l in range(len(data)):
		data[l][0] = list(data[l][0])
		for d in range(len(data[l][0])):
			if data[l][0][d] == None:
				data[l][0][d] = 'null'
	return data

@app.route("/",methods=['GET','POST'])
def homepage():
	return render_template('index.html')

@app.route('/text',methods=['POST'])
def lexnlp_run():
	#text = "LexPredict, LLC first announced the release of ContraxSuite™ on July 4, 2017 in a press release issued from its Illinois office.  Support packages begin at ten thousand dollars or 8,000 GBP per year.  Terms ranging from 12 months to three years are available, and some terms may receive a 10% discount."
	text = request.form['data']

	dates = lexnlp.extract.en.dates.get_dates_list(text)
	for i in range(len(dates)):
		dates[i] = dates[i].strftime('%d/%m/%Y')
	dates = dict(Counter(dates))
	trademarks = dict(Counter(lexnlp.extract.en.trademarks.get_trademarks(text)))
	durations = tupleToList([ [k,v] for k, v in dict(Counter(lexnlp.extract.en.durations.get_durations(text,True))).items()])

	entities_tuple = tuple(lexnlp.extract.en.geoentities.get_geoentities(text,list(lexnlp.extract.en.geoentities.load_entities_dict_by_path('geoentities.csv','geoaliases.csv')),text_languages='en'))
	geoentities = []
	for i in range(len(entities_tuple)):
		geoentities.append(entities_tuple[i][1][0])
	geoentities = dict(Counter(geoentities))

	percents = tupleToList([ [k,v] for k, v in dict(Counter(lexnlp.extract.en.percents.get_percents(text,True))).items()])
	currency = tupleToList([ [k,v] for k, v in dict(Counter(lexnlp.extract.en.money.get_money(text,True))).items()])
	parties = tupleToList([ [k,v] for k, v in dict(Counter(list(lexnlp.extract.en.entities.nltk_maxent.get_companies(text,detail_type=True,name_upper=True)))).items()])
	amounts = tupleToList([ [k,v] for k, v in dict(Counter(lexnlp.extract.en.amounts.get_amounts(text,True))).items()])

	return render_template('result.html',dates=dates,trademarks=trademarks,durations=durations,
		geoentities=geoentities,percents=percents,currency=currency,parties=parties,amounts=amounts)

if __name__ == "__main__":
	app.run(debug=True)