import pjson from '../package.json';

const VERSION = "v" + pjson.version;
const REPOSITORY = pjson.repository.url;
const TAG = pjson.repository.url + "/tree/" + VERSION

export {
    VERSION,
    REPOSITORY,
    TAG
}
