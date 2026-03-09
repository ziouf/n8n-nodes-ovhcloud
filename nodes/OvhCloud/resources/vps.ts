import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties, NodeParameterValueType } from "n8n-workflow";
import { OvhCloudApiClient } from "../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'vpsOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'List VPS',
                    value: 'list',
                    action: 'List VPS',
                },
                {
                    name: 'List Datacenters',
                    value: 'listDatacenters',
                    action: 'List all datacenters of the authenticated user',
                },
                {
                    name: 'Get VPS Details',
                    value: 'get',
                    action: 'Get details of a VPS',
                },
                {
                    name: 'Create VPS Snapshot',
                    value: 'createSnapshot',
                    action: 'Create a snapshot of a VPS',
                },
            ],
            default: 'list',
        },

        /* */
        {
            displayName: 'Service Name',
            name: 'serviceName',
            description: 'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
            type: 'resourceLocator',
            required: true,
            default: {
                mode: 'str',
                value: '',
            },
            modes: [
                {
                    displayName: 'By Name',
                    name: 'str',
                    type: 'string',
                },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select a service...',
                    typeOptions: {
                        searchListMethod: 'getVpsServices',
                        searchable: true,
                    },
                },
            ],
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    vpsOperation: ['get', 'createSnapshot'],
                },
            },
        },
        {
            displayName: 'Sub Resource',
            name: 'subResource',
            type: 'options',
            options: [
                { name: 'Automated Backup', value: 'automatedBackup' },
                { name: 'Available Upgrade', value: 'availableUpgrade' },
                { name: 'Backup FTP', value: 'backupftp' },
                { name: 'Datacenter', value: 'datacenter' },
                { name: 'Disks', value: 'disks' },
                { name: 'Distribution', value: 'distribution' },
                { name: 'IP Country Available', value: 'ipCountryAvailable' },
                { name: 'IPs', value: 'ips' },
                { name: 'Models', value: 'models' },
                { name: 'Option', value: 'option' },
                { name: 'Secondary DNS Domains', value: 'secondaryDnsDomains' },
                { name: 'Service Infos', value: 'serviceInfos' },
                { name: 'Snapshot', value: 'snapshot' },
                { name: 'Status', value: 'status' },
                { name: 'VPS', value: 'vps' },
            ],
            default: 'vps',
            description: 'The sub resource of the VPS service',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    vpsOperation: ['get', 'createSnapshot'],
                },
            },
        },
        {
            displayName: 'Operation',
            name: 'vpsDisksOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'List Disks',
                    value: 'list',
                    action: 'Get all disks of a VPS',
                },
                {
                    name: 'Get Disk',
                    value: 'get',
                    action: 'Get details of a disk of a VPS',
                },
            ],
            default: 'list',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['disks'],
                },
            }
        },
        {
            displayName: 'Disk ID',
            name: 'diskId',
            type: 'string',
            required: true,
            default: '',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['disks'],
                    vpsDisksOperation: ['get'],
                }
            }
        },




        /* Filters */
        {
            displayName: 'Country',
            name: 'vpsCountry',
            type: 'options',
            default: 'FR',
            // eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
            options: [
                { name: 'Unknown', value: 'UNKNOWN' },
                { name: 'Ascension Island', value: 'AC' },
                { name: 'Andorra', value: 'AD' },
                { name: 'United Arab Emirates', value: 'AE' },
                { name: 'Afghanistan', value: 'AF' },
                { name: 'Antigua and Barbuda', value: 'AG' },
                { name: 'Anguilla', value: 'AI' },
                { name: 'Albania', value: 'AL' },
                { name: 'Armenia', value: 'AM' },
                { name: 'Angola', value: 'AO' },
                { name: 'Antarctica', value: 'AQ' },
                { name: 'Argentina', value: 'AR' },
                { name: 'American Samoa', value: 'AS' },
                { name: 'Austria', value: 'AT' },
                { name: 'Australia', value: 'AU' },
                { name: 'Aruba', value: 'AW' },
                { name: 'Åland Islands', value: 'AX' },
                { name: 'Azerbaijan', value: 'AZ' },
                { name: 'Bosnia and Herzegovina', value: 'BA' },
                { name: 'Barbados', value: 'BB' },
                { name: 'Bangladesh', value: 'BD' },
                { name: 'Belgium', value: 'BE' },
                { name: 'Burkina Faso', value: 'BF' },
                { name: 'Bulgaria', value: 'BG' },
                { name: 'Bahrain', value: 'BH' },
                { name: 'Burundi', value: 'BI' },
                { name: 'Benin', value: 'BJ' },
                { name: 'Saint Barthélemy', value: 'BL' },
                { name: 'Bermuda', value: 'BM' },
                { name: 'Brunei', value: 'BN' },
                { name: 'Bolivia', value: 'BO' },
                { name: 'Caribbean Netherlands', value: 'BQ' },
                { name: 'Brazil', value: 'BR' },
                { name: 'Bahamas', value: 'BS' },
                { name: 'Bhutan', value: 'BT' },
                { name: 'Botswana', value: 'BW' },
                { name: 'Belarus', value: 'BY' },
                { name: 'Belize', value: 'BZ' },
                { name: 'Canada', value: 'CA' },
                { name: 'Cocos (Keeling) Islands', value: 'CC' },
                { name: 'Congo (DRC)', value: 'CD' },
                { name: 'Central African Republic', value: 'CF' },
                { name: 'Congo (Republic)', value: 'CG' },
                { name: 'Switzerland', value: 'CH' },
                { name: 'Côte d\'Ivoire', value: 'CI' },
                { name: 'Cook Islands', value: 'CK' },
                { name: 'Chile', value: 'CL' },
                { name: 'Cameroon', value: 'CM' },
                { name: 'China', value: 'CN' },
                { name: 'Colombia', value: 'CO' },
                { name: 'Costa Rica', value: 'CR' },
                { name: 'Cuba', value: 'CU' },
                { name: 'Cape Verde', value: 'CV' },
                { name: 'Curaçao', value: 'CW' },
                { name: 'Christmas Island', value: 'CX' },
                { name: 'Cyprus', value: 'CY' },
                { name: 'Czech Republic', value: 'CZ' },
                { name: 'Germany', value: 'DE' },
                { name: 'Diego Garcia', value: 'DG' },
                { name: 'Djibouti', value: 'DJ' },
                { name: 'Denmark', value: 'DK' },
                { name: 'Dominica', value: 'DM' },
                { name: 'Dominican Republic', value: 'DO' },
                { name: 'Algeria', value: 'DZ' },
                { name: 'Ceuta and Melilla', value: 'EA' },
                { name: 'Ecuador', value: 'EC' },
                { name: 'Estonia', value: 'EE' },
                { name: 'Egypt', value: 'EG' },
                { name: 'Western Sahara', value: 'EH' },
                { name: 'Eritrea', value: 'ER' },
                { name: 'Spain', value: 'ES' },
                { name: 'Ethiopia', value: 'ET' },
                { name: 'Finland', value: 'FI' },
                { name: 'Fiji', value: 'FJ' },
                { name: 'Falkland Islands', value: 'FK' },
                { name: 'Micronesia', value: 'FM' },
                { name: 'Faroe Islands', value: 'FO' },
                { name: 'France', value: 'FR' },
                { name: 'Gabon', value: 'GA' },
                { name: 'United Kingdom', value: 'GB' },
                { name: 'Grenada', value: 'GD' },
                { name: 'Georgia', value: 'GE' },
                { name: 'French Guiana', value: 'GF' },
                { name: 'Guernsey', value: 'GG' },
                { name: 'Ghana', value: 'GH' },
                { name: 'Gibraltar', value: 'GI' },
                { name: 'Greenland', value: 'GL' },
                { name: 'Gambia', value: 'GM' },
                { name: 'Guinea', value: 'GN' },
                { name: 'Guadeloupe', value: 'GP' },
                { name: 'Equatorial Guinea', value: 'GQ' },
                { name: 'Greece', value: 'GR' },
                { name: 'South Georgia and the South Sandwich Islands', value: 'GS' },
                { name: 'Guatemala', value: 'GT' },
                { name: 'Guam', value: 'GU' },
                { name: 'Guinea-Bissau', value: 'GW' },
                { name: 'Guyana', value: 'GY' },
                { name: 'Hong Kong', value: 'HK' },
                { name: 'Honduras', value: 'HN' },
                { name: 'Croatia', value: 'HR' },
                { name: 'Haiti', value: 'HT' },
                { name: 'Hungary', value: 'HU' },
                { name: 'Canary Islands', value: 'IC' },
                { name: 'Indonesia', value: 'ID' },
                { name: 'Ireland', value: 'IE' },
                { name: 'Israel', value: 'IL' },
                { name: 'Isle of Man', value: 'IM' },
                { name: 'India', value: 'IN' },
                { name: 'British Indian Ocean Territory', value: 'IO' },
                { name: 'Iraq', value: 'IQ' },
                { name: 'Iran', value: 'IR' },
                { name: 'Iceland', value: 'IS' },
                { name: 'Italy', value: 'IT' },
                { name: 'Jersey', value: 'JE' },
                { name: 'Jamaica', value: 'JM' },
                { name: 'Jordan', value: 'JO' },
                { name: 'Japan', value: 'JP' },
                { name: 'Kenya', value: 'KE' },
                { name: 'Kyrgyzstan', value: 'KG' },
                { name: 'Cambodia', value: 'KH' },
                { name: 'Kiribati', value: 'KI' },
                { name: 'Comoros', value: 'KM' },
                { name: 'Saint Kitts and Nevis', value: 'KN' },
                { name: 'North Korea', value: 'KP' },
                { name: 'South Korea', value: 'KR' },
                { name: 'Kuwait', value: 'KW' },
                { name: 'Cayman Islands', value: 'KY' },
                { name: 'Kazakhstan', value: 'KZ' },
                { name: 'Laos', value: 'LA' },
                { name: 'Lebanon', value: 'LB' },
                { name: 'Saint Lucia', value: 'LC' },
                { name: 'Liechtenstein', value: 'LI' },
                { name: 'Sri Lanka', value: 'LK' },
                { name: 'Liberia', value: 'LR' },
                { name: 'Lesotho', value: 'LS' },
                { name: 'Lithuania', value: 'LT' },
                { name: 'Luxembourg', value: 'LU' },
                { name: 'Latvia', value: 'LV' },
                { name: 'Libya', value: 'LY' },
                { name: 'Morocco', value: 'MA' },
                { name: 'Monaco', value: 'MC' },
                { name: 'Moldova', value: 'MD' },
                { name: 'Montenegro', value: 'ME' },
                { name: 'Saint Martin', value: 'MF' },
                { name: 'Madagascar', value: 'MG' },
                { name: 'Marshall Islands', value: 'MH' },
                { name: 'North Macedonia', value: 'MK' },
                { name: 'Mali', value: 'ML' },
                { name: 'Myanmar', value: 'MM' },
                { name: 'Mongolia', value: 'MN' },
                { name: 'Macau', value: 'MO' },
                { name: 'Northern Mariana Islands', value: 'MP' },
                { name: 'Martinique', value: 'MQ' },
                { name: 'Mauritania', value: 'MR' },
                { name: 'Montserrat', value: 'MS' },
                { name: 'Malta', value: 'MT' },
                { name: 'Mauritius', value: 'MU' },
                { name: 'Maldives', value: 'MV' },
                { name: 'Malawi', value: 'MW' },
                { name: 'Mexico', value: 'MX' },
                { name: 'Malaysia', value: 'MY' },
                { name: 'Mozambique', value: 'MZ' },
                { name: 'Namibia', value: 'NA' },
                { name: 'New Caledonia', value: 'NC' },
                { name: 'Niger', value: 'NE' },
                { name: 'Norfolk Island', value: 'NF' },
                { name: 'Nigeria', value: 'NG' },
                { name: 'Nicaragua', value: 'NI' },
                { name: 'Netherlands', value: 'NL' },
                { name: 'Norway', value: 'NO' },
                { name: 'Nepal', value: 'NP' },
                { name: 'Nauru', value: 'NR' },
                { name: 'Niue', value: 'NU' },
                { name: 'New Zealand', value: 'NZ' },
                { name: 'Oman', value: 'OM' },
                { name: 'Panama', value: 'PA' },
                { name: 'Peru', value: 'PE' },
                { name: 'French Polynesia', value: 'PF' },
                { name: 'Papua New Guinea', value: 'PG' },
                { name: 'Philippines', value: 'PH' },
                { name: 'Pakistan', value: 'PK' },
                { name: 'Poland', value: 'PL' },
                { name: 'Saint Pierre and Miquelon', value: 'PM' },
                { name: 'Pitcairn Islands', value: 'PN' },
                { name: 'Puerto Rico', value: 'PR' },
                { name: 'Palestine', value: 'PS' },
                { name: 'Portugal', value: 'PT' },
                { name: 'Palau', value: 'PW' },
                { name: 'Paraguay', value: 'PY' },
                { name: 'Qatar', value: 'QA' },
                { name: 'Réunion', value: 'RE' },
                { name: 'Romania', value: 'RO' },
                { name: 'Serbia', value: 'RS' },
                { name: 'Russia', value: 'RU' },
                { name: 'Rwanda', value: 'RW' },
                { name: 'Saudi Arabia', value: 'SA' },
                { name: 'Solomon Islands', value: 'SB' },
                { name: 'Seychelles', value: 'SC' },
                { name: 'Sudan', value: 'SD' },
                { name: 'Sweden', value: 'SE' },
                { name: 'Singapore', value: 'SG' },
                { name: 'Saint Helena', value: 'SH' },
                { name: 'Slovenia', value: 'SI' },
                { name: 'Svalbard and Jan Mayen', value: 'SJ' },
                { name: 'Slovakia', value: 'SK' },
                { name: 'Sierra Leone', value: 'SL' },
                { name: 'San Marino', value: 'SM' },
                { name: 'Senegal', value: 'SN' },
                { name: 'Somalia', value: 'SO' },
                { name: 'Suriname', value: 'SR' },
                { name: 'South Sudan', value: 'SS' },
                { name: 'São Tomé and Príncipe', value: 'ST' },
                { name: 'El Salvador', value: 'SV' },
                { name: 'Sint Maarten', value: 'SX' },
                { name: 'Syria', value: 'SY' },
                { name: 'Eswatini', value: 'SZ' },
                { name: 'Tristan Da Cunha', value: 'TA' },
                { name: 'Turks and Caicos Islands', value: 'TC' },
                { name: 'Chad', value: 'TD' },
                { name: 'French Southern Territories', value: 'TF' },
                { name: 'Togo', value: 'TG' },
                { name: 'Thailand', value: 'TH' },
                { name: 'Tajikistan', value: 'TJ' },
                { name: 'Tokelau', value: 'TK' },
                { name: 'Timor-Leste', value: 'TL' },
                { name: 'Turkmenistan', value: 'TM' },
                { name: 'Tunisia', value: 'TN' },
                { name: 'Tonga', value: 'TO' },
                { name: 'Turkey', value: 'TR' },
                { name: 'Trinidad and Tobago', value: 'TT' },
                { name: 'Tuvalu', value: 'TV' },
                { name: 'Taiwan', value: 'TW' },
                { name: 'Tanzania', value: 'TZ' },
                { name: 'Ukraine', value: 'UA' },
                { name: 'Uganda', value: 'UG' },
                { name: 'U.S. Minor Outlying Islands', value: 'UM' },
                { name: 'United States', value: 'US' },
                { name: 'Uruguay', value: 'UY' },
                { name: 'Uzbekistan', value: 'UZ' },
                { name: 'Vatican City', value: 'VA' },
                { name: 'Saint Vincent and the Grenadines', value: 'VC' },
                { name: 'Venezuela', value: 'VE' },
                { name: 'British Virgin Islands', value: 'VG' },
                { name: 'U.S. Virgin Islands', value: 'VI' },
                { name: 'Vietnam', value: 'VN' },
                { name: 'Vanuatu', value: 'VU' },
                { name: 'Wallis and Futuna', value: 'WF' },
                { name: 'Samoa', value: 'WS' },
                { name: 'Kosovo', value: 'XK' },
                { name: 'Yemen', value: 'YE' },
                { name: 'Mayotte', value: 'YT' },
                { name: 'South Africa', value: 'ZA' },
                { name: 'Zambia', value: 'ZM' },
                { name: 'Zimbabwe', value: 'ZW' },
            ],
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    vpsOperation: ['listDatacenters'],
                }
            }
        },
    ];
}

export const methodsListSearch = {
    getVpsServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const client = new OvhCloudApiClient(this);
        const data = await client.httpGet(`/vps`);
        return { results: data.map((service: string) => ({ name: service, value: service })) };
    }
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('vpsOperation', 0, { extractValue: true });
    const country = this.getNodeParameter('vpsCountry', 0, { extractValue: true });

    switch (operation) {
        case 'list':
            return client.httpGet(`/vps`);
        case 'listDatacenters':
            return client.httpGet(`/vps/datacenter`, { country });
        case 'get':
            return executeGet.call(this);
        // case 'createSnapshot':
        //     return executeCreateSnapshot.call(this);
    }

    throw new Error('The resource "vps" cannot be executed directly. Please select an operation to execute.');
}

async function executeGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true });
    const subResource = this.getNodeParameter('subResource', 0, { extractValue: true });

    switch (subResource) {
        case 'automatedBackup':
            return client.httpGet(`/vps/${serviceName}/automatedBackup`);
        case 'availableUpgrade':
            return client.httpGet(`/vps/${serviceName}/availableUpgrade`);
        case 'backupftp':
            return client.httpGet(`/vps/${serviceName}/backupftp`);
        case 'datacenter':
            return client.httpGet(`/vps/${serviceName}/datacenter`);
        case 'disks':
            return executeDisks.call(this, serviceName);
        case 'distribution':
            return client.httpGet(`/vps/${serviceName}/distribution`);
        case 'ipCountryAvailable':
            return client.httpGet(`/vps/${serviceName}/ipCountryAvailable`);
        case 'ips':
            return client.httpGet(`/vps/${serviceName}/ips`);
        case 'models':
            return client.httpGet(`/vps/${serviceName}/models`);
        case 'option':
            return client.httpGet(`/vps/${serviceName}/option`);
        case 'secondaryDnsDomains':
            return client.httpGet(`/vps/${serviceName}/secondaryDnsDomains`);
        case 'serviceInfos':
            return client.httpGet(`/vps/${serviceName}/serviceInfos`);
        case 'snapshot':
            return client.httpGet(`/vps/${serviceName}/snapshot`);
        case 'status':
            return client.httpGet(`/vps/${serviceName}/status`);
        case 'vps':
            return client.httpGet(`/vps/${serviceName}`);
    }

    throw new Error('Invalid sub resource selected');
}

async function executeDisks(this: IExecuteFunctions, serviceName: object | NodeParameterValueType): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('vpsDisksOperation', 0, { extractValue: true });
    const id = this.getNodeParameter('diskId', 0, { extractValue: true }) as string;

    switch (operation) {
        case 'list':
            return await client.httpGet(`/vps/${serviceName}/disks`);
        case 'get':
            return await client.httpGet(`/vps/${serviceName}/disks/${id}`);
    }
    
    throw new Error('Invalid operation for VPS Disks resource');
}
