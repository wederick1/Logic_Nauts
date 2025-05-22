from flask import Flask, send_from_directory
from routes import home

app = Flask(__name__)
app.secret_key = "june"

@app.route('/robots.txt')
def robots_txt():
    return send_from_directory(app.static_folder, 'robots.txt')

# Servir sitemap.xml
@app.route('/sitemap.xml')
def sitemap_xml():
    return send_from_directory(app.static_folder, 'sitemap.xml')

@app.route('/google<googleac9081e3acea3bef>.html')
def google_verification():
    return send_from_directory(app.static_folder, 'google<googleac9081e3acea3bef>.html')


app.register_blueprint(home.bp)


if __name__ == "__main__":
    app.run(debug=True)