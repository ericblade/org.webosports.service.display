import Service from 'webos-service-promised';
import WebosService from 'webos-service';
const service = new Service(WebosService, 'org.webosports.service.display');
const scanService = service.register('scan', 'Scans for displays');
const maxResService = service.register('getMaxResolution', 'Gets the maximum resolution of a display');
const getCurrentResService = service.register('getCurrentResolution', 'Gets the selected resolution of a display');
const setResolutionService = service.register('setResolution', 'Sets the resolution of a display');
scanService.on('request', (message) => {
    const displays = [];
    // TODO: actually scan for displays
    // TODO: if the display configuration has changed (ie hotplugging), fire an activitymanager event
    message.respond(displays);
});
maxResService.on('request', (message) => {
    // TODO: scan for displays, get maximum resolution available
    // TODO: probably need to also add in some sort of display identifier, so we know which display
    // we want the max res for...
    message.respond({ maxRes: '1920x1080' });
});
getCurrentResService.on('request', (message) => {
    // TODO: we'll be storing the requested resolutions, probably, so we can just access and return that
    // TODO: do NOT do subscriptions on this, it's tempting, but the service doesn't need to be running
    // all the time.  Fire an activitymanager event when we change resolutions, so other people who might
    // be interested know to come and check.
    message.respond({ currentRes: '1920x1080' });
});
setResolutionService.on('request', (message) => {
    // TODO: go and set the resolution, however that works, and then fire an activitymanager event
    message.respond({ resolution: '1920x1080' });
});
