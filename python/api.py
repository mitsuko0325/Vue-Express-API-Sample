import requests
import json

url = 'http://localhost:3000/test'
url2 = 'http://localhost:3000/test/sample'

print('hi')

response = requests.get(url)
print(response.text)

text = {'text': 'this is python/api.py'}
postResponse = requests.post(url, data=text)
print(postResponse.text)
