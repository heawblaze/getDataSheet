
async function getValue(spreadsheetId, range = 'Sheet1') {
    var params = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.

        // The A1 notation of the values to retrieve.
        range: range,  // TODO: Update placeholder value.
        majorDimension: 'DIMENSION_UNSPECIFIED',
        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'UNFORMATTED_VALUE',  // TODO: Update placeholder value.

        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        //dateTimeRenderOption: '',  // TODO: Update placeholder value.
    };

    var request = await gapi.client.sheets.spreadsheets.values.get(params);
    return request
}

function initClient() {
    var API_KEY = 'AIzaSyADO2XRTkaAmtTL0nmK7UWwRqxMKYU2mB0';  // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '622820598453-26cdngb1so189bkgdfanukr6cln8pnhb.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
     gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {

}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}