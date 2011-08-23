Windows-based SIS Integration Automation
======

This folder includes a batch-based script that can be used to automate
uploads of the zipped collection of CSV files exported from the SIS
system to the running Canvas instance. This script is suitable for use
with Windows Task Scheduler, which will run the process on a schedule
you can specify.

As always, this is provided AS-IS, without warranty, and without any
support beyond this document and anyone kind enough to help from the
community.

Installation
======

There are 5 steps to get this to work:

1. Download and install cURL for Windows (with SSL support!)
2. Download and install this script
3. Create a directory the script will watch for your CSV packages
4. Set all necessary configuration parameters in the script
5. Schedule the script with Task Scheduler

Installing cURL
------

You need to make sure you get the right package of cURL for Windows as
there are a number of options. You'll need the "static" binary that
includes SSL support. Here's a direct download link to the most recent
version at the time of writing:

http://www.gknw.net/mirror/curl/win32/curl-7.21.7-ssl-sspi-zlib-static-bin-w32.zip

If you need to find a different version (for example, a more recent
build), visit:

http://curl.haxx.se/download.html

When you've downloaded the zip file, do the following:

1. Create the folder C:\cURL
2. Extract the zip file
3. Copy *all* contents of the extracted folder to C:\cURL

If you've done this right, the C:\cURL folder should look something
like this:

    C:\cURL\build.txt
    C:\cURL\CHANGES
    C:\cURL\COPYING
    C:\cURL\curl.exe
    ...
    C:\cURL\libeay32.dll
    C:\cURL\libssl32.dll
    ...

And so on. If this is what you see, proceed to the next step. If you
don't, you've got a problem. Make sure that you're copying just the
contents of the extracted folder that you downloaded - not the folder
itself.

Installing the Script
------

This project lives on GitHub, which is where you should be reading
this. If not, you'll want to go to:

http://github.com/instructure/canvas-contrib

Navigate to the "SIS Integration"/"Automation"/"win32" directory.
You should see a file called:

    sis_runner.bat

Here's a link:

https://github.com/instructure/canvas-contrib/blob/master/SIS%20Integration/Automation/win32/sis_runner.bat

While viewing this file in your browser, you'll notice a few links in
the upper-right corner of the script contents. To download the script,
right-click the "raw" link in that upper-right corner and select
"Download" or "Save As" from the context menu. Save the script to your
Desktop or another MEMORABLE location.

Once you have a copy of the script downloaded to your computer, do the
following to finalize installation:

1. Create the folder C:\canvas-contrib
2. Move the save script from your Desktop to C:\canvas-contrib

Yes, it's that simple. If you've done things right, you should see the
following in that newly created folder:

    C:\canvas-contrib\sis_runner.bat

Configuration
------

You're nearly done. Before we schedule things and walk away, you need
to make sure things are setup correctly. First up is generating an API
key that the script can use.

1. Login to Canvas (https://canvas.instructure.com)
2. Visit your profile page (https://canvas.instructure.com/profile)
3. Click the "New Access Token" button at the bottom of the page
4. Follow the steps to create a new token
5. Copy the access token. Seriously, don't lose it!

Next, you'll need to create a folder where your SIS exports will be
stored for the script to pickup. By default, the script will use:

    C:\canvas-sis

Go ahead and create that folder right now. We'll wait.

All done? Good. Now open up the sis_runner.bat file that you saved
in the 'C:\canvas-contrib' folder. You can do this by right-clicking
on the file and selecting "Edit". This will open Notepad and allow
you to view and edit the contents of the script.

At the top of the file, you'll see the available configuration
parameters:

    SET TOKEN=''
    SET ACCOUNT=''
    SET USERNAME=''
    SET PASSWORD=''
    SET CANVAS_URL='https://canvas.instructure.com'
    SET EXPORT_DIRECTORY='C:\canvas-sis'

At a minimum, you must supply the API key you created above, your
institution's Canvas URL, your institution's account ID, and your
username and password. You can find the account ID by going to your
general account management page in Canvas (hover over the "Courses"
drop-down and select your account from the "Managed Accounts" list).
Look at the URL bar- you'll see ".../accounts/12345/..." in there.
The number following "/accounts/" is your account ID.

The configured script will end up looking something like this:

    SET TOKEN='adsfl234lk2lsnsdf...'
    SET ACCOUNT='12345'
    SET USERNAME='tom@instructure.com'
    SET PASSWORD='password'
    SET CANVAS_URL='https://institution.instructure.com'
    SET EXPORT_DIRECTORY='C:\canvas-sis'

You can adjust the export directory as needed.

Scheduling the Script
--------

The last step. Open "Task Scheduler" and create a new task by
clicking the "Action" menu and selecting "Create Basic Task".
Follow the creation wizard and supply your preferences for the
task name ("SIS Import" might be a good one) and your schedule 
preferences (daily, for example). When you arrive at the "Action"
step, select the "Start a program" option and click "Next". Browse
to the "C:\canvas-contrib" folder and select the "sis_runner.bat"
file. This will be the task that is run. Don't supply any
arguments, simply click "Next" and finish the wizard.

That's it. As soon as you finish this process, your SIS imports
will be running on the schedule you set above.

Support
======

This is an unsupported, community-created project. Keep that in 
mind. Instructure won't be able to help you fix or debug this.
That said, the community will hopefully help support and keep
both the script and this documentation up-to-date.

Good luck!