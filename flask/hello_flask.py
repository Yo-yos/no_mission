from flask import Flask
from flask import make_response
from flask import render_template
from flask import request

app = Flask('my_web_app')

@app.route('/')
def home ():
	return render_template('home_page.html')

@app.route('/hello')
def hello():
	username = request.cookies.get('username')
	if username:
		return render_template('hello_page.html',name=request.cookies.get('username'))
	else:
		return '<h1>Hello, visitor</h>'	

@app.route('/login',methods=['GET','POST'])
def login():
	if request.method == 'POST':
		username = request.form['username']
		password = request.form['password']
		if username == 'admin' and password == '12345':
			resp = make_response('Login Success')
			resp.set_cookie('username',username)
			return resp
		else:
			return 'Login Failed'
	return render_template('login_page.html')


app.debug = True
app.run()