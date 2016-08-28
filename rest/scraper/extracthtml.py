import re


htmlSource = ""
file = open('source/googlecasper.html','rw+')
for line in file:
    htmlSource += line
t = re.sub('<.*?>', '', htmlSource)
file.close()


file = open('source/googlecasper.html','w')
file.close()

htmlSource = re.sub(r'<style>.+?(?=/style>)', '', htmlSource,flags=re.DOTALL|re.IGNORECASE)
htmlSource = re.sub(r'/style>', '', htmlSource, flags=re.DOTALL|re.IGNORECASE)
htmlSource = re.sub(r'<script>.+?(?=/script>)', '', htmlSource,flags=re.DOTALL|re.IGNORECASE)
htmlSource = re.sub(r'/script>', '', htmlSource, flags=re.DOTALL|re.IGNORECASE)

htmlSource = re.sub(r'<head>.+?(?=/head>)', '', htmlSource,flags=re.DOTALL|re.IGNORECASE)
htmlSource = re.sub(r'/head>', '', htmlSource, flags=re.DOTALL|re.IGNORECASE)

file = open('source/googlecasper.html','rw+')
file.write(htmlSource)
file.close()













