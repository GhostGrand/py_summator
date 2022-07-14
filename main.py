import eel


@eel.expose
def summator(value1, value2, result):
    result = value1 + value2
    return result
    

eel.init("web")
eel.start("index.html", size = (400, 600))