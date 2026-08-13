import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			description: 'Reference of the eligibility test',
			displayOptions,
		},
		{
			displayName: 'Installation Type',
			name: 'installationType',
			type: 'options',
			default: "activate",
			options: [
				{ name: 'Activate', value: 'activate' },
				{ name: 'Activate Undefined', value: 'activate_undefined' },
				{ name: 'Create', value: 'create' },
				{ name: 'Multi OTP', value: 'multiOtp' },
			],
			description: 'Type of installation, fiber only',
			displayOptions,
		},
		{
			displayName: 'OTP',
			name: 'otp',
			type: 'string',
			default: '',
			description: 'OTP identifier if available',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Code of the offer plan',
			displayOptions,
		},
		{
			displayName: 'Product Code',
			name: 'productCode',
			type: 'string',
			default: '',
			description: 'Code of the chosen offer product',
			displayOptions,
		},
		{
			displayName: 'Site Company Name',
			name: 'siteCompanyName',
			type: 'string',
			default: '',
			description: 'Name of the company or site',
			displayOptions,
		},
		{
			displayName: 'Technical Visit',
			name: 'technicalVisit',
			type: 'options',
			default: "complex",
			options: [
				{ name: 'Complex', value: 'complex' },
				{ name: 'Simple', value: 'simple' },
			],
			description: 'Request for a technical visit, fiber only',
			displayOptions,
		},
		{
			displayName: 'Product Type',
			name: 'type',
			type: 'options',
			default: "ADSL",
			options: [
				{ name: 'ADSL', value: 'ADSL' },
				{ name: 'FTTE', value: 'FTTE' },
				{ name: 'FTTH', value: 'FTTH' },
				{ name: 'FTTO', value: 'FTTO' },
				{ name: 'SDSL', value: 'SDSL' },
				{ name: 'VDSL', value: 'VDSL' },
			],
			description: 'Type of offer product',
			displayOptions,
		},
		{
			displayName: 'Unbundling Type',
			name: 'unbundlingType',
			type: 'options',
			default: "full",
			options: [
				{ name: 'Full', value: 'full' },
				{ name: 'Partial', value: 'partial' },
			],
			description: 'Type of unbundling',
			displayOptions,
		},
	];
}

/**
 * Search the available meeting slots for copper line creation or fiber installation.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/meetings
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const eligibilityReference = (this.getNodeParameter('eligibilityReference', _itemIndex ?? 0, '') as string) || '';
	const installationType = (this.getNodeParameter('installationType', _itemIndex ?? 0, '') as string) || '';
	const otp = (this.getNodeParameter('otp', _itemIndex ?? 0, '') as string) || '';
	const planCode = (this.getNodeParameter('planCode', _itemIndex ?? 0, '') as string) || '';
	const productCode = (this.getNodeParameter('productCode', _itemIndex ?? 0, '') as string) || '';
	const siteCompanyName = (this.getNodeParameter('siteCompanyName', _itemIndex ?? 0, '') as string) || '';
	const technicalVisit = (this.getNodeParameter('technicalVisit', _itemIndex ?? 0, '') as string) || '';
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') as string) || '';
	const unbundlingType = (this.getNodeParameter('unbundlingType', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (eligibilityReference) body.eligibilityReference = eligibilityReference;
	if (installationType) body.installationType = installationType;
	if (otp) body.otp = otp;
	if (planCode) body.planCode = planCode;
	if (productCode) body.productCode = productCode;
	if (siteCompanyName) body.siteCompanyName = siteCompanyName;
	if (technicalVisit) body.technicalVisit = technicalVisit;
	if (type) body.type = type;
	if (unbundlingType) body.unbundlingType = unbundlingType;

	const data = (await client.httpPost(`/connectivity/eligibility/search/meetings`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
