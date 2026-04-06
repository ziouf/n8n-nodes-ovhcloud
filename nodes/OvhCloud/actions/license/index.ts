/**
 * @brief License resource operations for n8n node
 *
 * Aggregates all 12 license sub-resources:
 * - CloudLinux, Cpanel, Directadmin, Hycu, Office, OfficePrepaid,
 *   Plesk, Redhat, Sqlserver, Virtuozzo, Windows, Worklight
 *
 * Each sub-resource provides its own flat dropdown of operations.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	description as descriptionLicenseCloudLinux,
	execute as executeLicenseCloudLinux,
} from './resources/licenseCloudLinux/index';
import {
	description as descriptionLicenseCpanel,
	execute as executeLicenseCpanel,
} from './resources/licenseCpanel/index';
import {
	description as descriptionLicenseDirectadmin,
	execute as executeLicenseDirectadmin,
} from './resources/licenseDirectadmin/index';
import {
	description as descriptionLicenseHycu,
	execute as executeLicenseHycu,
} from './resources/licenseHycu/index';
import {
	description as descriptionLicenseOffice,
	execute as executeLicenseOffice,
} from './resources/licenseOffice/index';
import {
	description as descriptionLicenseOfficePrepaid,
	execute as executeLicenseOfficePrepaid,
} from './resources/licenseOfficePrepaid/index';
import {
	description as descriptionLicensePlesk,
	execute as executeLicensePlesk,
} from './resources/licensePlesk/index';
import {
	description as descriptionLicenseRedhat,
	execute as executeLicenseRedhat,
} from './resources/licenseRedhat/index';
import {
	description as descriptionLicenseSqlserver,
	execute as executeLicenseSqlserver,
} from './resources/licenseSqlserver/index';
import {
	description as descriptionLicenseVirtuozzo,
	execute as executeLicenseVirtuozzo,
} from './resources/licenseVirtuozzo/index';
import {
	description as descriptionLicenseWindows,
	execute as executeLicenseWindows,
} from './resources/licenseWindows/index';
import {
	description as descriptionLicenseWorklight,
	execute as executeLicenseWorklight,
} from './resources/licenseWorklight/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Type',
			name: 'licenseType',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'CloudLinux',
					value: 'licenseCloudLinux',
					action: 'Manage CloudLinux licenses',
				},
				{
					name: 'Cpanel',
					value: 'licenseCpanel',
					action: 'Manage Cpanel licenses',
				},
				{
					name: 'Directadmin',
					value: 'licenseDirectadmin',
					action: 'Manage Directadmin licenses',
				},
				{
					name: 'Hycu',
					value: 'licenseHycu',
					action: 'Manage Hycu licenses',
				},
				{
					name: 'Office',
					value: 'licenseOffice',
					action: 'Manage Office licenses',
				},
				{
					name: 'Office Prepaid',
					value: 'licenseOfficePrepaid',
					action: 'Manage Office Prepaid licenses',
				},
				{
					name: 'Plesk',
					value: 'licensePlesk',
					action: 'Manage Plesk licenses',
				},
				{
					name: 'Redhat',
					value: 'licenseRedhat',
					action: 'Manage Redhat licenses',
				},
				{
					name: 'Sqlserver',
					value: 'licenseSqlserver',
					action: 'Manage Sqlserver licenses',
				},
				{
					name: 'Virtuozzo',
					value: 'licenseVirtuozzo',
					action: 'Manage Virtuozzo licenses',
				},
				{
					name: 'Windows',
					value: 'licenseWindows',
					action: 'Manage Windows licenses',
				},
				{
					name: 'Worklight',
					value: 'licenseWorklight',
					action: 'Manage Worklight licenses',
				},
			],
			default: 'licenseCloudLinux',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionLicenseCloudLinux({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseCloudLinux'] },
		}),
		...descriptionLicenseCpanel({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseCpanel'] },
		}),
		...descriptionLicenseDirectadmin({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseDirectadmin'] },
		}),
		...descriptionLicenseHycu({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseHycu'] },
		}),
		...descriptionLicenseOffice({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseOffice'] },
		}),
		...descriptionLicenseOfficePrepaid({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseOfficePrepaid'] },
		}),
		...descriptionLicensePlesk({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licensePlesk'] },
		}),
		...descriptionLicenseRedhat({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseRedhat'] },
		}),
		...descriptionLicenseSqlserver({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseSqlserver'] },
		}),
		...descriptionLicenseVirtuozzo({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseVirtuozzo'] },
		}),
		...descriptionLicenseWindows({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseWindows'] },
		}),
		...descriptionLicenseWorklight({
			...displayOptions,
			show: { ...displayOptions?.show, licenseType: ['licenseWorklight'] },
		}),
	];
}

/**
 * Executes the selected License operation.
 *
 * Routes execution to the appropriate sub-resource handler based on the selected license type.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const licenseType = this.getNodeParameter('licenseType', 0) as string;

	switch (licenseType) {
		case 'licenseCloudLinux':
			return await executeLicenseCloudLinux.call(this);
		case 'licenseCpanel':
			return await executeLicenseCpanel.call(this);
		case 'licenseDirectadmin':
			return await executeLicenseDirectadmin.call(this);
		case 'licenseHycu':
			return await executeLicenseHycu.call(this);
		case 'licenseOffice':
			return await executeLicenseOffice.call(this);
		case 'licenseOfficePrepaid':
			return await executeLicenseOfficePrepaid.call(this);
		case 'licensePlesk':
			return await executeLicensePlesk.call(this);
		case 'licenseRedhat':
			return await executeLicenseRedhat.call(this);
		case 'licenseSqlserver':
			return await executeLicenseSqlserver.call(this);
		case 'licenseVirtuozzo':
			return await executeLicenseVirtuozzo.call(this);
		case 'licenseWindows':
			return await executeLicenseWindows.call(this);
		case 'licenseWorklight':
			return await executeLicenseWorklight.call(this);
	}

	throw new Error(`Unsupported license type "${licenseType}" for resource "license"`);
}
