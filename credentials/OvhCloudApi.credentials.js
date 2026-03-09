"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequestOptions = exports.OvhCloudApi = exports.OvhCloudApiSecretName = void 0;
var crypto_1 = require("crypto");
exports.OvhCloudApiSecretName = 'ovhCloud-Api';
var OvhCloudApi = /** @class */ (function () {
    function OvhCloudApi() {
        this.name = exports.OvhCloudApiSecretName;
        this.displayName = 'OVH API';
        this.icon = 'file:../icons/ovh_vertical.svg';
        this.documentationUrl = 'https://api.ovh.com/console/';
        this.properties = [
            {
                displayName: 'Endpoint',
                name: 'endpoint',
                type: 'options',
                options: [
                    {
                        name: 'OVH Europe',
                        value: 'eu.api.ovh.com/1.0',
                    },
                    {
                        name: 'OVH Canada',
                        value: 'ca.api.ovh.com/1.0',
                    },
                    {
                        name: 'OVH USA',
                        value: 'api.us.ovhcloud.com/1.0',
                    },
                    {
                        name: 'SoYouStart Europe',
                        value: 'eu.api.soyoustart.com/1.0',
                    },
                    {
                        name: 'SoYouStart North-America',
                        value: 'ca.api.soyoustart.com/1.0',
                    },
                    {
                        name: 'Kimsufi Europe',
                        value: 'eu.api.kimsufi.com/1.0',
                    },
                    {
                        name: 'Kimsufi North-America',
                        value: 'ca.api.kimsufi.com/1.0',
                    },
                ],
                default: 'eu.api.ovh.com/1.0',
                description: 'The OVH API endpoint to use.',
            },
            {
                displayName: 'Application Key',
                name: 'appKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Your OVH application key.',
                required: true,
            },
            {
                displayName: 'Application Secret',
                name: 'appSecret',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Your OVH application secret.',
                required: true,
            },
            {
                displayName: 'Consumer Key',
                name: 'consumerKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Your OVH consumer key.',
                required: true,
            },
        ];
        this.test = {
            request: {
                url: '/me',
                method: 'GET',
            },
            rules: [
                {
                    type: 'responseCode',
                    properties: {
                        value: 200,
                        message: 'Authentication successful',
                    }
                }
            ]
        };
    }
    OvhCloudApi.prototype.authenticate = function (rawCredentials, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.signRequestOptions)(rawCredentials, requestOptions)];
            });
        });
    };
    ;
    return OvhCloudApi;
}());
exports.OvhCloudApi = OvhCloudApi;
var signRequestOptions = function (credentials, requestOptions) {
    var endpoint = credentials.endpoint, appKey = credentials.appKey, appSecret = credentials.appSecret, consumerKey = credentials.consumerKey;
    var qs = requestOptions.qs;
    var baseURL = "https://".concat(endpoint);
    var url = baseURL + requestOptions.url + (qs && Object.keys(qs).length ? '?' + new URLSearchParams(qs).toString() : '');
    var method = requestOptions.method || 'GET';
    var body = typeof requestOptions.body === 'object' ? JSON.stringify(requestOptions.body) : requestOptions.body || '';
    var ts = Math.floor(Date.now() / 1000);
    var signatureFields = [appSecret, consumerKey, method, url, body, ts];
    return Object.assign({}, requestOptions, {
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
            'X-Ovh-Application': appKey,
            'X-Ovh-Consumer': consumerKey,
            'X-Ovh-Timestamp': ts,
            'X-Ovh-Signature': '$1$' + (0, crypto_1.createHash)('sha1').update(signatureFields.join('+')).digest('hex'),
        },
    });
};
exports.signRequestOptions = signRequestOptions;
