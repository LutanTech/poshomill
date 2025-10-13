from flask import Flask, render_template, url_for, render_template_string, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/support')
def support():
    return render_template('support.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', error_code=404, error_message="Page Not Found"), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('404.html', error_code=500, error_message="Internal Server Error"), 500

@app.errorhandler(502)
def internal_server_error(e):
    return render_template('404.html', error_code=502, error_message="Server Under Maintenance"), 502


if __name__ == "__main__":
    print('//Poshomill is grinding...😂😂')
    app.run(debug=True, host='0.0.0.0', port=50002)
