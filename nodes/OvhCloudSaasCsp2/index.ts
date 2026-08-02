import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// SaaS CSP2 operations
import * as list from './resources/list.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as billingPeriodPeaksGet from './resources/billingPeriodPeaksGet.operation';
import * as orderableLicensesGet from './resources/orderableLicensesGet.operation';
import * as orderableLicensesDetailGet from './resources/orderableLicensesDetailGet.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';
import * as subscriptionGet from './resources/subscriptionGet.operation';
import * as subscriptionPost from './resources/subscriptionPost.operation';
import * as subscriptionDetailGet from './resources/subscriptionDetailGet.operation';
import * as subscriptionDelete from './resources/subscriptionDelete.operation';
import * as subscriptionAddonsSubscriptionIdsGet from './resources/subscriptionAddonsSubscriptionIdsGet.operation';
import * as subscriptionAvailableAddonLicensesGet from './resources/subscriptionAvailableAddonLicensesGet.operation';
import * as subscriptionChangeQuantityPost from './resources/subscriptionChangeQuantityPost.operation';
import * as subscriptionOrderAddonPost from './resources/subscriptionOrderAddonPost.operation';
import * as taskGet from './resources/taskGet.operation';
import * as taskDetailGet from './resources/taskDetailGet.operation';
import * as usageStatisticsGet from './resources/usageStatisticsGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'saasCsp2Operation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Add Subscription',
				value: 'subscriptionPost',
				action: 'Add a subscription to an Office tenant',
			},
			{
				name: 'Change Subscription Quantity',
				value: 'subscriptionChangeQuantityPost',
				action: 'Change the license quantity of an Office subscription',
			},
			{
				name: 'Create Add-On Subscription',
				value: 'subscriptionOrderAddonPost',
				action: 'Create a new add-on subscription for an existing Office subscription',
			},
			{
				name: 'Delete Subscription',
				value: 'subscriptionDelete',
				action: 'Delete an Office subscription',
			},
			{
				name: 'Get Add-On Subscription IDs',
				value: 'subscriptionAddonsSubscriptionIdsGet',
				action: 'List the add-on subscription IDs of an Office subscription',
			},
			{
				name: 'Get Available Add-On Licenses',
				value: 'subscriptionAvailableAddonLicensesGet',
				action: 'List orderable add-on licenses for an Office subscription',
			},
			{
				name: 'Get Billing Period Peaks',
				value: 'billingPeriodPeaksGet',
				action: 'Get usage peaks for each billing period of an Office tenant',
			},
			{
				name: 'Get Office Service',
				value: 'get',
				action: 'Get properties of an Office tenant',
			},
			{
				name: 'Get Orderable License',
				value: 'orderableLicensesDetailGet',
				action: 'Get properties of an orderable Office license',
			},
			{
				name: 'Get Orderable Licenses',
				value: 'orderableLicensesGet',
				action: 'List orderable Office licenses of an Office tenant',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information of an Office tenant',
			},
			{
				name: 'Get Subscription',
				value: 'subscriptionDetailGet',
				action: 'Get properties of an Office subscription',
			},
			{
				name: 'Get Subscriptions',
				value: 'subscriptionGet',
				action: 'List subscriptions of an Office tenant',
			},
			{
				name: 'Get Task',
				value: 'taskDetailGet',
				action: 'Get properties of a specific task of an Office tenant',
			},
			{
				name: 'Get Tasks',
				value: 'taskGet',
				action: 'List running tasks of an Office tenant',
			},
			{
				name: 'Get Usage Statistics',
				value: 'usageStatisticsGet',
				action: 'Get usage statistics of an Office tenant for a given period',
			},
			{
				name: 'List Office Services',
				value: 'list',
				action: 'List available Office services',
			},
			{
				name: 'Update Office Service',
				value: 'updatePut',
				action: 'Modify properties of an Office tenant',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update service information of an Office tenant',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('saasCsp2Operation', 0) as string;

	switch (operation) {
		case 'subscriptionPost':
			return subscriptionPost.execute.call(this);
		case 'subscriptionChangeQuantityPost':
			return subscriptionChangeQuantityPost.execute.call(this);
		case 'subscriptionOrderAddonPost':
			return subscriptionOrderAddonPost.execute.call(this);
		case 'subscriptionDelete':
			return subscriptionDelete.execute.call(this);
		case 'subscriptionAddonsSubscriptionIdsGet':
			return subscriptionAddonsSubscriptionIdsGet.execute.call(this);
		case 'subscriptionAvailableAddonLicensesGet':
			return subscriptionAvailableAddonLicensesGet.execute.call(this);
		case 'billingPeriodPeaksGet':
			return billingPeriodPeaksGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'orderableLicensesDetailGet':
			return orderableLicensesDetailGet.execute.call(this);
		case 'orderableLicensesGet':
			return orderableLicensesGet.execute.call(this);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'subscriptionDetailGet':
			return subscriptionDetailGet.execute.call(this);
		case 'subscriptionGet':
			return subscriptionGet.execute.call(this);
		case 'taskDetailGet':
			return taskDetailGet.execute.call(this);
		case 'taskGet':
			return taskGet.execute.call(this);
		case 'usageStatisticsGet':
			return usageStatisticsGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
