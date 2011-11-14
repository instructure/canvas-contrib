#!/usr/bin/python
"""This script requires 2 non-standard python modules
* MultipartPostHandler
* json (actually, this is standard from python 2.6 upwards)

"""
import urllib2

try: 
  import MultipartPostHandler
except ImportError:
  print "MultipartPostHandler module required"
  exit(0)

try: 
  import simplejson as json
except ImportError: 
  import json

# See the documentation at
# https://canvas.instructure.com/doc/api/sis_imports.html

# Replace <canvas> with your canvas subdomain
BASE_URL = "https://canvas.instructure.com/api/v1/%s" 
# Change this to your access token
access_token = "8TgEIYYfJLE9snELVit4bSh7uEL"
# Change this to your account id as found in the URL when viewing Canvas
account_id = 11111 
endpoint = BASE_URL % 'accounts/%s/sis_imports.json' % (account_id)

# A csv file formatted according to the documentation listed above
# This should be changed to the name of the file you want to import.
#sis_file = '/Users/kevin/Documents/sis_demo/csv_delete_all.zip' 
#sis_file = 'delete_courses.csv' 
sis_file = '/Users/kevin/Desktop/SIS imports delete/users.csv' 


params = {'attachment':open(sis_file,'rb'),
    'access_token':access_token,
    'import_type':'instructure_csv',
  }

# Because of how the CSV file must posted(see the api docs), we need to use the
# MultipartPostHandler module.
opener = urllib2.build_opener(MultipartPostHandler.MultipartPostHandler)
urllib2.install_opener(opener)
req = urllib2.Request(endpoint,params)
response = urllib2.urlopen(req).read().strip()
response_data = json.loads(response)

# Now that the file is posted, check the status using the id returned.
import_id = response_data['id']
status_endpoint = BASE_URL % 'accounts/%d/sis_imports/%d.json?access_token=%s' % (account_id,import_id,access_token)
fh = urllib2.urlopen(status_endpoint)
status = json.loads(fh.read().strip())

# Do more stuff here
