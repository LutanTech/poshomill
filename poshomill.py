from flask import Flask, render_template, url_for, render_template_string, redirect, request, jsonify, render_template_string
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import string
import secrets

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///orders.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'supersecretkey'
app.config['JWT_SECRET_KEY'] = 'not_really_a_secret_key'

db=SQLAlchemy(app)
CORS(app)

def generate_order_id(length=8):
    return 'ORD_' + ''.join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(length))

def generate_book_id(length=8):
    return 'BOK_' + ''.join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(length))



class Order(db.Model):
    id = db.Column(db.String, primary_key=True, nullable=False,default=generate_order_id)
    name = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    product = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    address = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=True)

class Book(db.Model):
    id = db.Column(db.String, primary_key=True, nullable=False,default=generate_book_id)
    name = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    product = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    instructions = db.Column(db.Text, nullable=True)


@app.route('/')
def index():
    return render_template('index.html')

from flask import render_template_string

@app.route('/order', methods=['POST'])
def order():
    name = request.form.get('fullname')
    address = request.form.get('address')
    date = request.form.get('delivery_date')
    msg = request.form.get('message')
    phone = request.form.get('phone')
    product = request.form.get('product')
    quantity = request.form.get('quantity')
    new_order = Order(name=name, address=address, date=date, instructions=msg if msg else '', phone=phone, product=product, quantity=quantity)
    
    try:
        db.session.add(new_order)
        db.session.commit()
        status = 'success'
        message = f'Order placed successfully! Your order ID is {new_order.id}'
    except Exception as e:
        db.session.rollback()
        status = 'error'
        message = f'Error placing order: {str(e)}'

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </head>
    <body>
    <h1> {message}</h1>
    <a href="/">Home</a>
        <script>
            Swal.fire({{
                icon: '{status}',
                title: '{status.capitalize()}',
                text: '{message}',
                confirmButtonText: 'OK'
            }}).then(() => {{
                window.location.href = '/https://poshomillg1and2.ct.ws/order';
            }});
        </script>
    </body>
    </html>
    """
    return html

@app.route('/book', methods=['POST'])
def book():
    name = request.form.get('fullname')
    address = request.form.get('address')
    date = request.form.get('delivery_date')
    msg = request.form.get('message')
    phone = request.form.get('phone')
    product = request.form.get('product')
    quantity = request.form.get('quantity')
    new_order = Book(name=name, date=date, instructions=msg if msg else '', phone=phone, product=product, quantity=quantity)
    
    try:
        db.session.add(new_order)
        db.session.commit()
        status = 'success'
        message = f'Order placed successfully! Your order ID is {new_order.id}'
    except Exception as e:
        db.session.rollback()
        status = 'error'
        message = f'Error placing order: {str(e)}'

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </head>
    <body>
    <h1> {message}</h1>
    <a href="/">Home</a>
        <script>
            Swal.fire({{
                icon: '{status}',
                title: '{status.capitalize()}',
                text: '{message}',
                confirmButtonText: 'OK'
            }}).then(() => {{
                window.location.href = '/https://poshomillg1and2.ct.ws/order';
            }});
        </script>
    </body>
    </html>
    """
    return html


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
    with app.app_context():
        db.create_all()
    print('//Poshomill is grinding...😂😂')
    app.run(host='0.0.0.0', port=9000, debug=True)