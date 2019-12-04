videoplayer-xblock
==================

### Description ###

This XBlock provides the DASH Player (https://github.com/Dash-Industry-Forum/dash.js/wiki) instead of the default one.

- True full screen allowed
- More video speeds available : | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | by default
- (Optional) Source document download button, for example to provide your PPT or PDF file

### Customize the XBlock ###

- The list of playbackRates can be edited in `videoplayer-xblock / videoplayer / static / js / videoplayer_view.js`
- By default, Video Download Allowed is set on True. The default value can  be changed in `videoplayer-xblock / videoplayer / videoplayer.py`

### Install / Update the XBlock ###
#### These steps are for bitnami open edx installation
/opt/edx-ironwood.2-1/use_edx
source /opt/edx-ironwood.2-1/apps/edx/venvs/edxapp/bin/activate
pip install git+https://github.com/314e/videoplayer-xblock.git
/opt/edx-ironwood.2-1/ctlscript.sh restart apache


#### Follow the same steps for other xblock installations
pip install git+https://github.com/MarCnu/pdfXBlock
scormxblock

### Activate the XBlock in your course ###
Go to `Settings -> Advanced Settings` and set `advanced_modules` to `["videoplayer"]`.

### Use the XBlock in a unit ###
Select `Advanced -> Video Player` in your unit.
