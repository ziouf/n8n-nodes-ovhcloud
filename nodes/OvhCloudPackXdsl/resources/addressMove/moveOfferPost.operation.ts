import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

const MODEM_OPTIONS: { name: string; value: string }[] = [
	{ name: 'No', value: 'no' },
	{ name: 'Recycled', value: 'recycled' },
	{ name: 'Yes', value: 'yes' },
];

const INSTALLATION_TYPES: { name: string; value: string }[] = [
	{ name: 'Activate', value: 'activate' },
	{ name: 'Activate Undefined', value: 'activate_undefined' },
	{ name: 'Create', value: 'create' },
	{ name: 'Multi OTP', value: 'multiOtp' },
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Accept Contracts',
			name: 'acceptContracts',
			type: 'boolean',
			default: false,
			description:
				'Whether you explicitly accept the terms of the contract corresponding to your new offer',
			displayOptions,
		},
		{
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Keep Current Number',
			name: 'keepCurrentNumber',
			type: 'boolean',
			default: false,
			description: 'Whether the current number should be kept',
			displayOptions,
		},
		{
			displayName: 'Modem',
			name: 'modem',
			type: 'options',
			default: 'yes',
			options: MODEM_OPTIONS,
			required: true,
			description: 'Modem choice',
			displayOptions,
		},
		{
			displayName: 'Offer Name',
			name: 'offerName',
			type: 'string',
			default: '',
			required: true,
			description: 'Reference of the new offer',
			displayOptions,
		},
		{
			displayName: 'OTP',
			name: 'otp',
			type: 'boolean',
			default: false,
			description:
				'Whether you have an Optical Termination Point (Point de Terminaison Optique) at home',
			displayOptions,
		},
		{
			displayName: 'Product Code',
			name: 'productCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Product code, a unique identifier for the product from addressMove/offer',
			displayOptions,
		},
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			description: 'Building identifier, "null" if no identifier is available',
			displayOptions,
		},
		{
			displayName: 'Building Reference',
			name: 'buildingReference',
			type: 'string',
			default: '',
			description: 'Building reference for FTTH and FTTE offers',
			displayOptions,
		},
		{
			displayName: 'Contact Phone',
			name: 'contactPhone',
			type: 'string',
			default: '',
			description: 'Customer contact phone number',
			displayOptions,
		},
		{
			displayName: 'Door',
			name: 'door',
			type: 'string',
			default: '',
			description: 'Door identifier, "null" if no identifier is available',
			displayOptions,
		},
		{
			displayName: 'Engage Months',
			name: 'engageMonths',
			type: 'number',
			default: 0,
			description: 'Number of months of re-engagement',
			displayOptions,
		},
		{
			displayName: 'Floor',
			name: 'floor',
			type: 'string',
			default: '',
			description: 'Floor identifier, "null" if no identifier is available',
			displayOptions,
		},
		{
			displayName: 'Installation Type',
			name: 'installationType',
			type: 'options',
			default: 'create',
			options: INSTALLATION_TYPES,
			description: 'Installation type, only on FTTH technology',
			displayOptions,
		},
		{
			displayName: 'Mondial Relay ID',
			name: 'mondialRelayId',
			type: 'number',
			default: 0,
			description: 'Mondial relay ID if a shipping is needed',
			displayOptions,
		},
		{
			displayName: 'Move Out Date',
			name: 'moveOutDate',
			type: 'dateTime',
			default: '',
			description: 'The date when the customer is no longer at the current address',
			displayOptions,
		},
		{
			displayName: 'Nic Shipping',
			name: 'nicShipping',
			type: 'string',
			default: '',
			description: 'NicShipping if a shipping is needed',
			displayOptions,
		},
		{
			displayName: 'ONT Shipping Contact',
			name: 'ontShippingContact',
			type: 'string',
			default: '',
			description: 'Allows you to personalize a delivery address for the ONT',
			displayOptions,
		},
		{
			displayName: 'Options',
			name: 'options',
			type: 'string',
			default: '',
			description: 'Options wanted in the new offer (JSON array)',
			displayOptions,
		},
		{
			displayName: 'OTP Reference',
			name: 'otpReference',
			type: 'string',
			default: '',
			description: 'Reference of the Optical Termination Point',
			displayOptions,
		},
		{
			displayName: 'Residence',
			name: 'residence',
			type: 'string',
			default: '',
			description: 'Residence identifier, "null" if no identifier is available',
			displayOptions,
		},
		{
			displayName: 'Stair',
			name: 'stair',
			type: 'string',
			default: '',
			description: 'Stair identifier, "null" if no identifier is available',
			displayOptions,
		},
		{
			displayName: 'Sub Services To Delete',
			name: 'subServicesToDelete',
			type: 'string',
			default: '',
			description: 'List of domains of services to delete if needed (JSON array)',
			displayOptions,
		},
		{
			displayName: 'Sub Services To Keep',
			name: 'subServicesToKeep',
			type: 'string',
			default: '',
			description: 'List of domains of services to keep if needed (JSON array)',
			displayOptions,
		},
	];
}

/**
 * Move the access to another address.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/addressMove/moveOffer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', 0, '', { extractValue: true }) as string;
	const acceptContracts = this.getNodeParameter('acceptContracts', 0, false) as boolean;
	const eligibilityReference = this.getNodeParameter('eligibilityReference', 0) as string;
	const keepCurrentNumber = this.getNodeParameter('keepCurrentNumber', 0, false) as boolean;
	const modem = this.getNodeParameter('modem', 0) as string;
	const offerName = this.getNodeParameter('offerName', 0) as string;
	const otp = this.getNodeParameter('otp', 0, false) as boolean;
	const productCode = this.getNodeParameter('productCode', 0) as string;

	const body: IDataObject = {
		acceptContracts,
		eligibilityReference,
		keepCurrentNumber,
		modem,
		offerName,
		otp,
		productCode,
	};

	const building = (this.getNodeParameter('building', 0, '') as string) || '';
	if (building) body.building = building;
	const buildingReference = (this.getNodeParameter('buildingReference', 0, '') as string) || '';
	if (buildingReference) body.buildingReference = buildingReference;
	const contactPhone = (this.getNodeParameter('contactPhone', 0, '') as string) || '';
	if (contactPhone) body.contactPhone = contactPhone;
	const door = (this.getNodeParameter('door', 0, '') as string) || '';
	if (door) body.door = door;
	const engageMonths = this.getNodeParameter('engageMonths', 0, 0) as number;
	if (engageMonths > 0) body.engageMonths = engageMonths;
	const floor = (this.getNodeParameter('floor', 0, '') as string) || '';
	if (floor) body.floor = floor;
	const installationType = (this.getNodeParameter('installationType', 0, '') as string) || '';
	if (installationType) body.installationType = installationType;
	const mondialRelayId = this.getNodeParameter('mondialRelayId', 0, 0) as number;
	if (mondialRelayId > 0) body.mondialRelayId = mondialRelayId;
	const moveOutDate = (this.getNodeParameter('moveOutDate', 0, '') as string) || '';
	if (moveOutDate) body.moveOutDate = moveOutDate;
	const nicShipping = (this.getNodeParameter('nicShipping', 0, '') as string) || '';
	if (nicShipping) body.nicShipping = nicShipping;
	const ontShippingContact = (this.getNodeParameter('ontShippingContact', 0, '') as string) || '';
	if (ontShippingContact) body.ontShippingContact = ontShippingContact;
	const options = (this.getNodeParameter('options', 0, '') as string) || '';
	if (options) body.options = JSON.parse(options);
	const otpReference = (this.getNodeParameter('otpReference', 0, '') as string) || '';
	if (otpReference) body.otpReference = otpReference;
	const residence = (this.getNodeParameter('residence', 0, '') as string) || '';
	if (residence) body.residence = residence;
	const stair = (this.getNodeParameter('stair', 0, '') as string) || '';
	if (stair) body.stair = stair;
	const subServicesToDelete = (this.getNodeParameter('subServicesToDelete', 0, '') as string) || '';
	if (subServicesToDelete) body.subServicesToDelete = JSON.parse(subServicesToDelete);
	const subServicesToKeep = (this.getNodeParameter('subServicesToKeep', 0, '') as string) || '';
	if (subServicesToKeep) body.subServicesToKeep = JSON.parse(subServicesToKeep);

	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/addressMove/moveOffer`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
