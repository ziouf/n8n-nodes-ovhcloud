import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as subscriptionPostExecute } from './resources/subscriptionPost.operation';
import { execute as subscriptionChangeQuantityPostExecute } from './resources/subscriptionChangeQuantityPost.operation';
import { execute as subscriptionOrderAddonPostExecute } from './resources/subscriptionOrderAddonPost.operation';
import { execute as subscriptionDeleteExecute } from './resources/subscriptionDelete.operation';
import { execute as subscriptionAddonsSubscriptionIdsGetExecute } from './resources/subscriptionAddonsSubscriptionIdsGet.operation';
import { execute as subscriptionAvailableAddonLicensesGetExecute } from './resources/subscriptionAvailableAddonLicensesGet.operation';
import { execute as billingPeriodPeaksGetExecute } from './resources/billingPeriodPeaksGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as orderableLicensesDetailGetExecute } from './resources/orderableLicensesDetailGet.operation';
import { execute as orderableLicensesGetExecute } from './resources/orderableLicensesGet.operation';
import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as subscriptionDetailGetExecute } from './resources/subscriptionDetailGet.operation';
import { execute as subscriptionGetExecute } from './resources/subscriptionGet.operation';
import { execute as taskDetailGetExecute } from './resources/taskDetailGet.operation';
import { execute as taskGetExecute } from './resources/taskGet.operation';
import { execute as usageStatisticsGetExecute } from './resources/usageStatisticsGet.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as updatePutExecute } from './resources/updatePut.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'saasCsp2Operation',
	'saascsp2',
	[
	{
		name: 'Add Subscription',
		value: 'subscriptionPost',
		action: 'Add a subscription to an Office tenant',
		execute: subscriptionPostExecute,
		description: noProps,
	},
	{
		name: 'Change Subscription Quantity',
		value: 'subscriptionChangeQuantityPost',
		action: 'Change the license quantity of an Office subscription',
		execute: subscriptionChangeQuantityPostExecute,
		description: noProps,
	},
	{
		name: 'Create Add-On Subscription',
		value: 'subscriptionOrderAddonPost',
		action: 'Create a new add-on subscription for an existing Office subscription',
		execute: subscriptionOrderAddonPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Subscription',
		value: 'subscriptionDelete',
		action: 'Delete an Office subscription',
		execute: subscriptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Add-On Subscription IDs',
		value: 'subscriptionAddonsSubscriptionIdsGet',
		action: 'List the add-on subscription IDs of an Office subscription',
		execute: subscriptionAddonsSubscriptionIdsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Available Add-On Licenses',
		value: 'subscriptionAvailableAddonLicensesGet',
		action: 'List orderable add-on licenses for an Office subscription',
		execute: subscriptionAvailableAddonLicensesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Billing Period Peaks',
		value: 'billingPeriodPeaksGet',
		action: 'Get usage peaks for each billing period of an Office tenant',
		execute: billingPeriodPeaksGetExecute,
		description: noProps,
	},
	{
		name: 'Get Office Service',
		value: 'get',
		action: 'Get properties of an Office tenant',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable License',
		value: 'orderableLicensesDetailGet',
		action: 'Get properties of an orderable Office license',
		execute: orderableLicensesDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Licenses',
		value: 'orderableLicensesGet',
		action: 'List orderable Office licenses of an Office tenant',
		execute: orderableLicensesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information of an Office tenant',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Subscription',
		value: 'subscriptionDetailGet',
		action: 'Get properties of an Office subscription',
		execute: subscriptionDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Subscriptions',
		value: 'subscriptionGet',
		action: 'List subscriptions of an Office tenant',
		execute: subscriptionGetExecute,
		description: noProps,
	},
	{
		name: 'Get Task',
		value: 'taskDetailGet',
		action: 'Get properties of a specific task of an Office tenant',
		execute: taskDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Tasks',
		value: 'taskGet',
		action: 'List running tasks of an Office tenant',
		execute: taskGetExecute,
		description: noProps,
	},
	{
		name: 'Get Usage Statistics',
		value: 'usageStatisticsGet',
		action: 'Get usage statistics of an Office tenant for a given period',
		execute: usageStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'List Office Services',
		value: 'list',
		action: 'List available Office services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Update Office Service',
		value: 'updatePut',
		action: 'Modify properties of an Office tenant',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update service information of an Office tenant',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
