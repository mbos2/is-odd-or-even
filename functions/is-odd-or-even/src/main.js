import isOddOrEvenWrapper from './common/is-odd-or-even-utils.js';
import { getStaticFile } from './common/get-utils.js';
export default async ({ req, res, log, error }) => {
    log(req);
    log(res);
    /**
     * Setting up variables
     */
    // const projectId = process.env.APPWRITE_FUNCTION_PROJECT_ID;
    // const apiKey = process.env.PROJECT_API_KEY;
    // const isApiKeySet = apiKey !== undefined;
    // if (isApiKeySet === false) {
    //   error("Environment variable PROJECT_API_KEY is not set. Function cannot use Appwrite SDK. Please set PROJECT_API_KEY environment variable with your Appwrite API key.");
    //   return res.json({ ok: false, message: `Internal Server Error.` }, 500);
    // }
    // const client = new Client();
    // client.setEndpoint('https://cloud.appwrite.io/v1');
    // client.setProject(projectId as string);
    // client.setKey(apiKey as string);
    if (req.method === 'POST') {
        if (req.headers['content-type'] !== 'application/json') {
            error("Invalid Header. Content-Type must be application/json.");
            return res.json({ ok: false, message: `Invalid Header. Content-Type must be application/json.` }, 400);
        }
        if (!req.body) {
            error("No body was found.");
            return res.json({ ok: false, message: `No body was found.` }, 400);
        }
        const payload = JSON.parse(req.bodyRaw);
        if (!payload) {
            error("No payload was found.");
            return res.json({ ok: false, message: `No payload was found.` }, 400);
        }
        log("Payload: ");
        log(payload);
        if (!payload.number) {
            error("No number value was found in the payload.");
            return res.json({ ok: false, message: `No number value was found in the payload.` }, 400);
        }
        log("Goint into isOddOrEvenWrapper");
        const result = await isOddOrEvenWrapper(payload.number, log, error);
        return res.json(result);
    }
    // Return HTML
    return res.send(getStaticFile('index.html'), 200, {
        'Content-Type': 'text/html; charset=utf-8',
    });
};
