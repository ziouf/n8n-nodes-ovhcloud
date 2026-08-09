import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'The address parameter',
			displayOptions,
		},
		{
			displayName: 'Address Extra',
			name: 'addressExtra',
			type: 'string',
			default: '',
			description: 'The addressExtra parameter',
			displayOptions,
		},
		{
			displayName: 'Ape',
			name: 'ape',
			type: 'string',
			default: '',
			description: 'The ape parameter',
			displayOptions,
		},
		{
			displayName: 'Birth Date',
			name: 'birthDate',
			type: 'string',
			default: '',
			description: 'The birthDate parameter',
			displayOptions,
		},
		{
			displayName: 'Cedex',
			name: 'cedex',
			type: 'string',
			default: '',
			description: 'The cedex parameter',
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			description: 'The city parameter',
			displayOptions,
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'The country parameter',
			displayOptions,
		},
		{
			displayName: 'Directory Service Code',
			name: 'directoryServiceCode',
			type: 'string',
			default: '',
			description: 'The directoryServiceCode parameter',
			displayOptions,
		},
		{
			displayName: 'Display First Name',
			name: 'displayFirstName',
			type: 'string',
			default: '',
			description: 'Whether The displayFirstName parameter',
			displayOptions,
		},
		{
			displayName: 'Display Marketing Directory',
			name: 'displayMarketingDirectory',
			type: 'string',
			default: '',
			description: 'Whether The displayMarketingDirectory parameter',
			displayOptions,
		},
		{
			displayName: 'Display Only City',
			name: 'displayOnlyCity',
			type: 'string',
			default: '',
			description: 'Whether The displayOnlyCity parameter',
			displayOptions,
		},
		{
			displayName: 'Display Search Reverse',
			name: 'displaySearchReverse',
			type: 'string',
			default: '',
			description: 'Whether The displaySearchReverse parameter',
			displayOptions,
		},
		{
			displayName: 'Display Universal Directory',
			name: 'displayUniversalDirectory',
			type: 'string',
			default: '',
			description: 'Whether The displayUniversalDirectory parameter',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'The email parameter',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'The firstName parameter',
			displayOptions,
		},
		{
			displayName: 'Gender',
			name: 'gender',
			type: 'string',
			default: '',
			description: 'The gender parameter',
			displayOptions,
		},
		{
			displayName: 'Legal Form',
			name: 'legalForm',
			type: 'string',
			default: '',
			description: 'The legalForm parameter',
			displayOptions,
		},
		{
			displayName: 'Line Description',
			name: 'lineDescription',
			type: 'string',
			default: '',
			description: 'The lineDescription parameter',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Occupation',
			name: 'occupation',
			type: 'string',
			default: '',
			description: 'The occupation parameter',
			displayOptions,
		},
		{
			displayName: 'Post Box',
			name: 'postBox',
			type: 'string',
			default: '',
			description: 'The postBox parameter',
			displayOptions,
		},
		{
			displayName: 'Post Code',
			name: 'postCode',
			type: 'string',
			default: '',
			description: 'The postCode parameter',
			displayOptions,
		},
		{
			displayName: 'Siret',
			name: 'siret',
			type: 'string',
			default: '',
			description: 'The siret parameter',
			displayOptions,
		},
		{
			displayName: 'Social Nomination',
			name: 'socialNomination',
			type: 'string',
			default: '',
			description: 'The socialNomination parameter',
			displayOptions,
		},
		{
			displayName: 'Social Nomination Extra',
			name: 'socialNominationExtra',
			type: 'string',
			default: '',
			description: 'The socialNominationExtra parameter',
			displayOptions,
		},
		{
			displayName: 'Urban District',
			name: 'urbanDistrict',
			type: 'string',
			default: '',
			description: 'The urbanDistrict parameter',
			displayOptions,
		},
		{
			displayName: 'Way Name',
			name: 'wayName',
			type: 'string',
			default: '',
			description: 'The wayName parameter',
			displayOptions,
		},
		{
			displayName: 'Way Number',
			name: 'wayNumber',
			type: 'string',
			default: '',
			description: 'The wayNumber parameter',
			displayOptions,
		},
		{
			displayName: 'Way Number Extra',
			name: 'wayNumberExtra',
			type: 'string',
			default: '',
			description: 'The wayNumberExtra parameter',
			displayOptions,
		},
		{
			displayName: 'Way Type',
			name: 'wayType',
			type: 'string',
			default: '',
			description: 'The wayType parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceDirectoryPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/directory
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const address = this.getNodeParameter('address', _itemIndex) as string;
	const addressExtra = this.getNodeParameter('addressExtra', _itemIndex) as string;
	const ape = this.getNodeParameter('ape', _itemIndex) as string;
	const birthDate = this.getNodeParameter('birthDate', _itemIndex) as string;
	const cedex = this.getNodeParameter('cedex', _itemIndex) as string;
	const city = this.getNodeParameter('city', _itemIndex) as string;
	const country = this.getNodeParameter('country', _itemIndex) as string;
	const directoryServiceCode = this.getNodeParameter('directoryServiceCode', _itemIndex) as string;
	const displayFirstName = this.getNodeParameter('displayFirstName', _itemIndex) as string;
	const displayMarketingDirectory = this.getNodeParameter('displayMarketingDirectory', _itemIndex) as string;
	const displayOnlyCity = this.getNodeParameter('displayOnlyCity', _itemIndex) as string;
	const displaySearchReverse = this.getNodeParameter('displaySearchReverse', _itemIndex) as string;
	const displayUniversalDirectory = this.getNodeParameter('displayUniversalDirectory', _itemIndex) as string;
	const email = this.getNodeParameter('email', _itemIndex) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex) as string;
	const gender = this.getNodeParameter('gender', _itemIndex) as string;
	const legalForm = this.getNodeParameter('legalForm', _itemIndex) as string;
	const lineDescription = this.getNodeParameter('lineDescription', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const occupation = this.getNodeParameter('occupation', _itemIndex) as string;
	const postBox = this.getNodeParameter('postBox', _itemIndex) as string;
	const postCode = this.getNodeParameter('postCode', _itemIndex) as string;
	const siret = this.getNodeParameter('siret', _itemIndex) as string;
	const socialNomination = this.getNodeParameter('socialNomination', _itemIndex) as string;
	const socialNominationExtra = this.getNodeParameter('socialNominationExtra', _itemIndex) as string;
	const urbanDistrict = this.getNodeParameter('urbanDistrict', _itemIndex) as string;
	const wayName = this.getNodeParameter('wayName', _itemIndex) as string;
	const wayNumber = this.getNodeParameter('wayNumber', _itemIndex) as string;
	const wayNumberExtra = this.getNodeParameter('wayNumberExtra', _itemIndex) as string;
	const wayType = this.getNodeParameter('wayType', _itemIndex) as string;

	const body: IDataObject = {
		address: address,
		addressExtra: addressExtra,
		ape: ape,
		birthDate: birthDate,
		cedex: cedex,
		city: city,
		country: country,
		directoryServiceCode: directoryServiceCode,
		displayFirstName: displayFirstName,
		displayMarketingDirectory: displayMarketingDirectory,
		displayOnlyCity: displayOnlyCity,
		displaySearchReverse: displaySearchReverse,
		displayUniversalDirectory: displayUniversalDirectory,
		email: email,
		firstName: firstName,
		gender: gender,
		legalForm: legalForm,
		lineDescription: lineDescription,
		name: name,
		occupation: occupation,
		postBox: postBox,
		postCode: postCode,
		siret: siret,
		socialNomination: socialNomination,
		socialNominationExtra: socialNominationExtra,
		urbanDistrict: urbanDistrict,
		wayName: wayName,
		wayNumber: wayNumber,
		wayNumberExtra: wayNumberExtra,
		wayType: wayType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/directory', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
