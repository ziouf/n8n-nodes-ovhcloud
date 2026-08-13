import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'Virtual Machine ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the virtual machine',
			displayOptions,
		},
		{
			displayName: 'Bypass Guest OS Family Check',
			name: 'bypassGuestOsFamilyCheck',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether bypass compatibility check between managed license and current VMware guest configured OS family',
			displayOptions,
		},
		{
			displayName: 'License',
			name: 'kmsLicense',
			type: 'options',
			options: [
				{ name: 'Windows 2016 Datacenter', value: 'windows 2016 Datacenter' },
				{ name: 'Windows 2016 Standard', value: 'windows 2016 Standard' },
				{ name: 'Windows 2016 Standard SQL2016 Standard', value: 'windows 2016 Standard SQL2016 Standard' },
				{ name: 'Windows 2016 Standard SQL2016 Web', value: 'windows 2016 Standard SQL2016 Web' },
				{ name: 'Windows 2019 Datacenter', value: 'windows 2019 Datacenter' },
				{ name: 'Windows 2019 Datacenter Core', value: 'windows 2019 Datacenter Core' },
				{ name: 'Windows 2019 Standard', value: 'windows 2019 Standard' },
				{ name: 'Windows 2019 Standard Core', value: 'windows 2019 Standard Core' },
				{ name: 'Windows 2019 Standard SQL2019 Standard', value: 'windows 2019 Standard SQL2019 Standard' },
				{ name: 'Windows 2019 Standard SQL2019 Web', value: 'windows 2019 Standard SQL2019 Web' },
				{ name: 'Windows 2019 Standard SQL2022 Standard', value: 'windows 2019 Standard SQL2022 Standard' },
				{ name: 'Windows 2019 Standard SQL2022 Web', value: 'windows 2019 Standard SQL2022 Web' },
				{ name: 'Windows 2022 Datacenter', value: 'windows 2022 Datacenter' },
				{ name: 'Windows 2022 Datacenter Core', value: 'windows 2022 Datacenter Core' },
				{ name: 'Windows 2022 Datacenter SQL2019 Standard', value: 'windows 2022 Datacenter SQL2019 Standard' },
				{ name: 'Windows 2022 Datacenter SQL2019 Web', value: 'windows 2022 Datacenter SQL2019 Web' },
				{ name: 'Windows 2022 Datacenter SQL2022 Standard', value: 'windows 2022 Datacenter SQL2022 Standard' },
				{ name: 'Windows 2022 Datacenter SQL2022 Web', value: 'windows 2022 Datacenter SQL2022 Web' },
				{ name: 'Windows 2022 Standard', value: 'windows 2022 Standard' },
				{ name: 'Windows 2022 Standard Core', value: 'windows 2022 Standard Core' },
				{ name: 'Windows 2022 Standard SQL2019 Standard', value: 'windows 2022 Standard SQL2019 Standard' },
				{ name: 'Windows 2022 Standard SQL2019 Web', value: 'windows 2022 Standard SQL2019 Web' },
				{ name: 'Windows 2022 Standard SQL2022 Standard', value: 'windows 2022 Standard SQL2022 Standard' },
				{ name: 'Windows 2022 Standard SQL2022 Web', value: 'windows 2022 Standard SQL2022 Web' },
				{ name: 'Windows 2025 Datacenter', value: 'windows 2025 Datacenter' },
				{ name: 'Windows 2025 Datacenter Core', value: 'windows 2025 Datacenter Core' },
				{ name: 'Windows 2025 Datacenter SQL2022 Enterprise', value: 'windows 2025 Datacenter SQL2022 Enterprise' },
				{ name: 'Windows 2025 Datacenter SQL2022 Standard', value: 'windows 2025 Datacenter SQL2022 Standard' },
				{ name: 'Windows 2025 Datacenter SQL2022 Web', value: 'windows 2025 Datacenter SQL2022 Web' },
				{ name: 'Windows 2025 Standard', value: 'windows 2025 Standard' },
				{ name: 'Windows 2025 Standard Core', value: 'windows 2025 Standard Core' },
				{ name: 'Windows 2025 Standard SQL2022 Standard', value: 'windows 2025 Standard SQL2022 Standard' },
				{ name: 'Windows 2025 Standard SQL2022 Web', value: 'windows 2025 Standard SQL2022 Web' },
			],
			default: 'windows 2016 Datacenter',
			required: true,
			description: 'License to use',
			displayOptions,
		},
	];
}

/**
 * Executes the Set a managed license on virtual machine operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const body: IDataObject = {};
	body.bypassGuestOsFamilyCheck = this.getNodeParameter('bypassGuestOsFamilyCheck', _itemIndex) as boolean;
	body.kmsLicense = this.getNodeParameter('kmsLicense', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/setLicense`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
