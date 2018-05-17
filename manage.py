import os
from bottle import route, run, template, static_file

@route('/static/<folder>/<filename>')
def server_static(folder,filename):
    return static_file(filename, root='./static/' + folder + '/')

@route('/')
def calc_function():
    return template('index')


if __name__ == '__main__':
    if os.getenv("HEROKU")==None:
        run(host="localhost", port=(os.environ.get("PORT",5050)), debug=True, reloader=True)
    else:
        run(host="0.0.0.0", port=(os.environ.get("PORT",5050)))
