import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeServicesListGet,
	description as descriptionServicesListGet,
} from './servicesListGet.operation';
import {
	execute as executeServicesGetGet,
	description as descriptionServicesGetGet,
} from './servicesGetGet.operation';
import {
	execute as executeServicesUpdatePut,
	description as descriptionServicesUpdatePut,
} from './servicesUpdatePut.operation';
import {
	execute as executeServicesDeleteDelete,
	description as descriptionServicesDeleteDelete,
} from './servicesDeleteDelete.operation';
import {
	execute as executeReinstallPost,
	description as descriptionReinstallPost,
} from './reinstallPost.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './taskListGet.operation';
import {
	execute as executeTaskGetGet,
	description as descriptionTaskGetGet,
} from './taskGetGet.operation';
import {
	execute as executeEngagementGet,
	description as descriptionEngagementGet,
} from './resources/billing/engagementGet.operation';
import {
	execute as executeEngagementAvailableGet,
	description as descriptionEngagementAvailableGet,
} from './resources/billing/engagementAvailableGet.operation';
import {
	execute as executeEngagementEndRulePut,
	description as descriptionEngagementEndRulePut,
} from './resources/billing/engagementEndRulePut.operation';
import {
	execute as executeEngagementFlushPost,
	description as descriptionEngagementFlushPost,
} from './resources/billing/engagementFlushPost.operation';
import {
	execute as executeEngagementRequestDelete,
	description as descriptionEngagementRequestDelete,
} from './resources/billing/engagementRequestDelete.operation';
import {
	execute as executeEngagementRequestGet,
	description as descriptionEngagementRequestGet,
} from './resources/billing/engagementRequestGet.operation';
import {
	execute as executeEngagementRequestPost,
	description as descriptionEngagementRequestPost,
} from './resources/billing/engagementRequestPost.operation';
import {
	execute as executeConsumptionGet,
	description as descriptionConsumptionGet,
} from './resources/consumption/consumptionGet.operation';
import {
	execute as executeConsumptionElementGet,
	description as descriptionConsumptionElementGet,
} from './resources/consumption/consumptionElementGet.operation';
import {
	execute as executeConsumptionForecastGet,
	description as descriptionConsumptionForecastGet,
} from './resources/consumption/consumptionForecastGet.operation';
import {
	execute as executeConsumptionForecastElementGet,
	description as descriptionConsumptionForecastElementGet,
} from './resources/consumption/consumptionForecastElementGet.operation';
import {
	execute as executeConsumptionHistoryGet,
	description as descriptionConsumptionHistoryGet,
} from './resources/consumption/consumptionHistoryGet.operation';
import {
	execute as executeConsumptionHistoryIdGet,
	description as descriptionConsumptionHistoryIdGet,
} from './resources/consumption/consumptionHistoryIdGet.operation';
import {
	execute as executeConsumptionHistoryIdElementGet,
	description as descriptionConsumptionHistoryIdElementGet,
} from './resources/consumption/consumptionHistoryIdElementGet.operation';
import {
	execute as executeDetachGet,
	description as descriptionDetachGet,
} from './resources/detach/detachGet.operation';
import {
	execute as executeDetachPlanCodeGet,
	description as descriptionDetachPlanCodeGet,
} from './resources/detach/detachPlanCodeGet.operation';
import {
	execute as executeDetachPlanCodeExecutePost,
	description as descriptionDetachPlanCodeExecutePost,
} from './resources/detach/detachPlanCodeExecutePost.operation';
import {
	execute as executeDetachPlanCodeOptionsGet,
	description as descriptionDetachPlanCodeOptionsGet,
} from './resources/detach/detachPlanCodeOptionsGet.operation';
import {
	execute as executeDetachPlanCodeSimulatePost,
	description as descriptionDetachPlanCodeSimulatePost,
} from './resources/detach/detachPlanCodeSimulatePost.operation';
import {
	execute as executeFormGet,
	description as descriptionFormGet,
} from './resources/form/formGet.operation';
import {
	execute as executeFormFormNameGet,
	description as descriptionFormFormNameGet,
} from './resources/form/formFormNameGet.operation';
import {
	execute as executeFormFormNameAnswerPost,
	description as descriptionFormFormNameAnswerPost,
} from './resources/form/formFormNameAnswerPost.operation';
import {
	execute as executeSavingsPlansContractsGet,
	description as descriptionSavingsPlansContractsGet,
} from './resources/savingsPlans/savingsPlansContractsGet.operation';
import {
	execute as executeSavingsPlansSubscribableGet,
	description as descriptionSavingsPlansSubscribableGet,
} from './resources/savingsPlans/savingsPlansSubscribableGet.operation';
import {
	execute as executeSavingsPlansSubscribeExecutePost,
	description as descriptionSavingsPlansSubscribeExecutePost,
} from './resources/savingsPlans/savingsPlansSubscribeExecutePost.operation';
import {
	execute as executeSavingsPlansSubscribeSimulatePost,
	description as descriptionSavingsPlansSubscribeSimulatePost,
} from './resources/savingsPlans/savingsPlansSubscribeSimulatePost.operation';
import {
	execute as executeSavingsPlansSubscribedGet,
	description as descriptionSavingsPlansSubscribedGet,
} from './resources/savingsPlans/savingsPlansSubscribedGet.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdGet,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdGet,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdGet.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdPut,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdPut,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdPut.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdChangeSizePost.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdPeriodsGet.operation';
import {
	execute as executeSavingsPlansSubscribedSavingsPlanIdTerminatePost,
	description as descriptionSavingsPlansSubscribedSavingsPlanIdTerminatePost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdTerminatePost.operation';
import {
	execute as executeUpgradeGet,
	description as descriptionUpgradeGet,
} from './resources/upgrade/upgradeGet.operation';
import {
	execute as executeUpgradePlanCodeGet,
	description as descriptionUpgradePlanCodeGet,
} from './resources/upgrade/upgradePlanCodeGet.operation';
import {
	execute as executeUpgradePlanCodeExecutePost,
	description as descriptionUpgradePlanCodeExecutePost,
} from './resources/upgrade/upgradePlanCodeExecutePost.operation';
import {
	execute as executeUpgradePlanCodeSimulatePost,
	description as descriptionUpgradePlanCodeSimulatePost,
} from './resources/upgrade/upgradePlanCodeSimulatePost.operation';
import {
	execute as executeOptionsGet,
	description as descriptionOptionsGet,
} from './resources/optionsGet.operation';
import {
	execute as executeRenewPeriodCapacitiesGet,
	description as descriptionRenewPeriodCapacitiesGet,
} from './resources/renewPeriodCapacitiesGet.operation';
import {
	execute as executeTechnicalDetailsGet,
	description as descriptionTechnicalDetailsGet,
} from './resources/technicalDetailsGet.operation';
import {
	execute as executeTerminatePost,
	description as descriptionTerminatePost,
} from './resources/terminatePost.operation';
import {
	execute as executeTerminateConfirmPost,
	description as descriptionTerminateConfirmPost,
} from './resources/terminateConfirmPost.operation';
import {
	execute as executeTerminateSkipRetentionPeriodPost,
	description as descriptionTerminateSkipRetentionPeriodPost,
} from './resources/terminateSkipRetentionPeriodPost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'servicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Answer Form',
				value: 'formFormNameAnswerPost',
				action: 'Post answers to the form for your service',
			},
			{
				name: 'Change Savings Plan End Action',
				value: 'savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost',
				action: 'Change the action occurring at the end of the Savings Plan period',
			},
			{
				name: 'Change Savings Plan Size',
				value: 'savingsPlansSubscribedSavingsPlanIdChangeSizePost',
				action: 'Resize the Savings Plan',
			},
			{
				name: 'Confirm Service Termination',
				value: 'terminateConfirmPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Delete Engagement Request',
				value: 'engagementRequestDelete',
				action: 'Delete the ongoing Engagement request on this Service',
			},
			{
				name: 'Delete Service',
				value: 'servicesDeleteDelete',
				action: 'Delete a service',
			},
			{
				name: 'Execute Detach',
				value: 'detachPlanCodeExecutePost',
				action: 'Perform the migration to a standalone offer',
			},
			{
				name: 'Execute Upgrade',
				value: 'upgradePlanCodeExecutePost',
				action: 'Perform the migration to another offer',
			},
			{
				name: 'Flush Engagement',
				value: 'engagementFlushPost',
				action: 'Flush the engagement of this service',
			},
			{
				name: 'Get Consumption',
				value: 'consumptionGet',
				action: 'Get a summary of the ongoing consumption of your service',
			},
			{
				name: 'Get Consumption Elements',
				value: 'consumptionElementGet',
				action: 'Get each resource consumed by your service',
			},
			{
				name: 'Get Consumption Forecast',
				value: 'consumptionForecastGet',
				action: 'Get a summary of the forecasted consumption of your service',
			},
			{
				name: 'Get Consumption History',
				value: 'consumptionHistoryIdGet',
				action: 'Get a summary of the past consumption of your service',
			},
			{
				name: 'Get Detach Offer',
				value: 'detachPlanCodeGet',
				action: 'View an offer this option can be converted to',
			},
			{
				name: 'Get Engagement',
				value: 'engagementGet',
				action: 'Get engagement details',
			},
			{
				name: 'Get Engagement Request',
				value: 'engagementRequestGet',
				action: 'Get the ongoing Engagement request on this Service',
			},
			{
				name: 'Get Forecast Consumption Elements',
				value: 'consumptionForecastElementGet',
				action: 'Get each resource forecasted consumption of your service',
			},
			{
				name: 'Get Form',
				value: 'formFormNameGet',
				action: 'Get specified form description for service',
			},
			{
				name: 'Get History Consumption Elements',
				value: 'consumptionHistoryIdElementGet',
				action: 'Get each resource consumed for the given history',
			},
			{
				name: 'Get Renew Period Capacities',
				value: 'renewPeriodCapacitiesGet',
				action: 'Get possible renew periods of a service',
			},
			{
				name: 'Get Service',
				value: 'servicesGetGet',
				action: 'Get service details',
			},
			{
				name: 'Get Service Options',
				value: 'optionsGet',
				action: 'Get options of a service',
			},
			{
				name: 'Get Subscribed Savings Plan',
				value: 'savingsPlansSubscribedSavingsPlanIdGet',
				action: 'Fetch a subscribed Savings Plan',
			},
			{
				name: 'Get Task',
				value: 'taskGetGet',
				action: 'Get task details',
			},
			{
				name: 'Get Technical Details',
				value: 'technicalDetailsGet',
				action: 'View the technical details of the service',
			},
			{
				name: 'Get Upgrade Offer',
				value: 'upgradePlanCodeGet',
				action: 'View an offer this option can be converted to',
			},
			{
				name: 'List Available Engagements',
				value: 'engagementAvailableGet',
				action: 'List all available engagements a service can subscribe to',
			},
			{
				name: 'List Consumption History',
				value: 'consumptionHistoryGet',
				action: 'List consumption history of your service',
			},
			{
				name: 'List Detach Offers',
				value: 'detachGet',
				action: 'List offers this option can be converted to',
			},
			{
				name: 'List Detach Options',
				value: 'detachPlanCodeOptionsGet',
				action: 'View all offers compatible for the detachment for the given option offer',
			},
			{
				name: 'List Forms',
				value: 'formGet',
				action: 'List available forms for service',
			},
			{
				name: 'List Savings Plan Contracts',
				value: 'savingsPlansContractsGet',
				action: 'List contracts automatically agreed when subscribing to savings plan for this project',
			},
			{
				name: 'List Savings Plan Periods',
				value: 'savingsPlansSubscribedSavingsPlanIdPeriodsGet',
				action: 'List the period history of a given Savings Plan',
			},
			{
				name: 'List Services',
				value: 'servicesListGet',
				action: 'List all generic services',
			},
			{
				name: 'List Subscribable Savings Plans',
				value: 'savingsPlansSubscribableGet',
				action: 'List subscribable Savings Plan commercial offers for a given Subscription',
			},
			{
				name: 'List Subscribed Savings Plans',
				value: 'savingsPlansSubscribedGet',
				action: 'List subscribed Savings Plans',
			},
			{
				name: 'List Tasks',
				value: 'taskListGet',
				action: 'List tasks for a service',
			},
			{
				name: 'List Upgrade Offers',
				value: 'upgradeGet',
				action: 'List offers this option can be converted to',
			},
			{
				name: 'Reinstall Service',
				value: 'reinstallPost',
				action: 'Reinstall a service',
			},
			{
				name: 'Request Engagement',
				value: 'engagementRequestPost',
				action: 'Request an Engagement on this Service',
			},
			{
				name: 'Simulate Detach',
				value: 'detachPlanCodeSimulatePost',
				action: 'Simulate the migration to a standalone offer',
			},
			{
				name: 'Simulate Savings Plan Subscription',
				value: 'savingsPlansSubscribeSimulatePost',
				action: 'Simulate a Subscription to a Savings Plan',
			},
			{
				name: 'Simulate Upgrade',
				value: 'upgradePlanCodeSimulatePost',
				action: 'Simulate the conversion to another offer',
			},
			{
				name: 'Skip Retention Period',
				value: 'terminateSkipRetentionPeriodPost',
				action: 'Immediately release the resources associated to this Service',
			},
			{
				name: 'Subscribe to Savings Plan',
				value: 'savingsPlansSubscribeExecutePost',
				action: 'Subscribe to a Savings Plan, applicable contracts will be automatically agreed to',
			},
			{
				name: 'Terminate Savings Plan',
				value: 'savingsPlansSubscribedSavingsPlanIdTerminatePost',
				action: 'Terminate the Savings Plan',
			},
			{
				name: 'Terminate Service',
				value: 'terminatePost',
				action: 'Request service termination',
			},
			{
				name: 'Update Engagement End Rule',
				value: 'engagementEndRulePut',
				action: 'Change Engagement end rules',
			},
			{
				name: 'Update Service',
				value: 'servicesUpdatePut',
				action: 'Update service details',
			},
			{
				name: 'Update Subscribed Savings Plan',
				value: 'savingsPlansSubscribedSavingsPlanIdPut',
				action: 'Update a subscribed Savings Plan',
			},

			],
			default: 'servicesListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionServicesListGet({
			...displayOptions,
			show: { servicesOperation: ['servicesListGet'] },
		}) as INodeProperties[]),
		...(descriptionServicesGetGet({
			...displayOptions,
			show: { servicesOperation: ['servicesGetGet'] },
		}) as INodeProperties[]),
		...(descriptionServicesUpdatePut({
			...displayOptions,
			show: { servicesOperation: ['servicesUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionServicesDeleteDelete({
			...displayOptions,
			show: { servicesOperation: ['servicesDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionReinstallPost({
			...displayOptions,
			show: { servicesOperation: ['reinstallPost'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet({
			...displayOptions,
			show: { servicesOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskGetGet({
			...displayOptions,
			show: { servicesOperation: ['taskGetGet'] },
		}) as INodeProperties[]),
		...(descriptionEngagementGet({
			...displayOptions,
			show: { servicesOperation: ['engagementGet'] },
		}) as INodeProperties[]),
		...(descriptionEngagementAvailableGet({
			...displayOptions,
			show: { servicesOperation: ['engagementAvailableGet'] },
		}) as INodeProperties[]),
		...(descriptionEngagementEndRulePut({
			...displayOptions,
			show: { servicesOperation: ['engagementEndRulePut'] },
		}) as INodeProperties[]),
		...(descriptionEngagementFlushPost({
			...displayOptions,
			show: { servicesOperation: ['engagementFlushPost'] },
		}) as INodeProperties[]),
		...(descriptionEngagementRequestDelete({
			...displayOptions,
			show: { servicesOperation: ['engagementRequestDelete'] },
		}) as INodeProperties[]),
		...(descriptionEngagementRequestGet({
			...displayOptions,
			show: { servicesOperation: ['engagementRequestGet'] },
		}) as INodeProperties[]),
		...(descriptionEngagementRequestPost({
			...displayOptions,
			show: { servicesOperation: ['engagementRequestPost'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionElementGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionElementGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionForecastGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionForecastGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionForecastElementGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionForecastElementGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionHistoryGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionHistoryGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionHistoryIdGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionHistoryIdGet'] },
		}) as INodeProperties[]),
		...(descriptionConsumptionHistoryIdElementGet({
			...displayOptions,
			show: { servicesOperation: ['consumptionHistoryIdElementGet'] },
		}) as INodeProperties[]),
		...(descriptionDetachGet({
			...displayOptions,
			show: { servicesOperation: ['detachGet'] },
		}) as INodeProperties[]),
		...(descriptionDetachPlanCodeGet({
			...displayOptions,
			show: { servicesOperation: ['detachPlanCodeGet'] },
		}) as INodeProperties[]),
		...(descriptionDetachPlanCodeExecutePost({
			...displayOptions,
			show: { servicesOperation: ['detachPlanCodeExecutePost'] },
		}) as INodeProperties[]),
		...(descriptionDetachPlanCodeOptionsGet({
			...displayOptions,
			show: { servicesOperation: ['detachPlanCodeOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionDetachPlanCodeSimulatePost({
			...displayOptions,
			show: { servicesOperation: ['detachPlanCodeSimulatePost'] },
		}) as INodeProperties[]),
		...(descriptionFormGet({
			...displayOptions,
			show: { servicesOperation: ['formGet'] },
		}) as INodeProperties[]),
		...(descriptionFormFormNameGet({
			...displayOptions,
			show: { servicesOperation: ['formFormNameGet'] },
		}) as INodeProperties[]),
		...(descriptionFormFormNameAnswerPost({
			...displayOptions,
			show: { servicesOperation: ['formFormNameAnswerPost'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansContractsGet({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansContractsGet'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribableGet({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribableGet'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribeExecutePost({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribeExecutePost'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribeSimulatePost({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribeSimulatePost'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedGet({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedGet'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdGet({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdGet'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdPut({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdPut'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdChangeSizePost({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdChangeSizePost'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdPeriodsGet({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdPeriodsGet'] },
		}) as INodeProperties[]),
		...(descriptionSavingsPlansSubscribedSavingsPlanIdTerminatePost({
			...displayOptions,
			show: { servicesOperation: ['savingsPlansSubscribedSavingsPlanIdTerminatePost'] },
		}) as INodeProperties[]),
		...(descriptionUpgradeGet({
			...displayOptions,
			show: { servicesOperation: ['upgradeGet'] },
		}) as INodeProperties[]),
		...(descriptionUpgradePlanCodeGet({
			...displayOptions,
			show: { servicesOperation: ['upgradePlanCodeGet'] },
		}) as INodeProperties[]),
		...(descriptionUpgradePlanCodeExecutePost({
			...displayOptions,
			show: { servicesOperation: ['upgradePlanCodeExecutePost'] },
		}) as INodeProperties[]),
		...(descriptionUpgradePlanCodeSimulatePost({
			...displayOptions,
			show: { servicesOperation: ['upgradePlanCodeSimulatePost'] },
		}) as INodeProperties[]),
		...(descriptionOptionsGet({
			...displayOptions,
			show: { servicesOperation: ['optionsGet'] },
		}) as INodeProperties[]),
		...(descriptionRenewPeriodCapacitiesGet({
			...displayOptions,
			show: { servicesOperation: ['renewPeriodCapacitiesGet'] },
		}) as INodeProperties[]),
		...(descriptionTechnicalDetailsGet({
			...displayOptions,
			show: { servicesOperation: ['technicalDetailsGet'] },
		}) as INodeProperties[]),
		...(descriptionTerminatePost({
			...displayOptions,
			show: { servicesOperation: ['terminatePost'] },
		}) as INodeProperties[]),
		...(descriptionTerminateConfirmPost({
			...displayOptions,
			show: { servicesOperation: ['terminateConfirmPost'] },
		}) as INodeProperties[]),
		...(descriptionTerminateSkipRetentionPeriodPost({
			...displayOptions,
			show: { servicesOperation: ['terminateSkipRetentionPeriodPost'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('servicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'servicesListGet':
			return executeServicesListGet.call(this, itemIndex ?? 0);
		case 'servicesGetGet':
			return executeServicesGetGet.call(this, itemIndex ?? 0);
		case 'servicesUpdatePut':
			return executeServicesUpdatePut.call(this, itemIndex ?? 0);
		case 'servicesDeleteDelete':
			return executeServicesDeleteDelete.call(this, itemIndex ?? 0);
		case 'reinstallPost':
			return executeReinstallPost.call(this, itemIndex ?? 0);
		case 'taskListGet':
			return executeTaskListGet.call(this, itemIndex ?? 0);
		case 'taskGetGet':
			return executeTaskGetGet.call(this, itemIndex ?? 0);
		case 'engagementGet':
			return executeEngagementGet.call(this, itemIndex ?? 0);
		case 'engagementAvailableGet':
			return executeEngagementAvailableGet.call(this, itemIndex ?? 0);
		case 'engagementEndRulePut':
			return executeEngagementEndRulePut.call(this, itemIndex ?? 0);
		case 'engagementFlushPost':
			return executeEngagementFlushPost.call(this, itemIndex ?? 0);
		case 'engagementRequestDelete':
			return executeEngagementRequestDelete.call(this, itemIndex ?? 0);
		case 'engagementRequestGet':
			return executeEngagementRequestGet.call(this, itemIndex ?? 0);
		case 'engagementRequestPost':
			return executeEngagementRequestPost.call(this, itemIndex ?? 0);
		case 'consumptionGet':
			return executeConsumptionGet.call(this, itemIndex ?? 0);
		case 'consumptionElementGet':
			return executeConsumptionElementGet.call(this, itemIndex ?? 0);
		case 'consumptionForecastGet':
			return executeConsumptionForecastGet.call(this, itemIndex ?? 0);
		case 'consumptionForecastElementGet':
			return executeConsumptionForecastElementGet.call(this, itemIndex ?? 0);
		case 'consumptionHistoryGet':
			return executeConsumptionHistoryGet.call(this, itemIndex ?? 0);
		case 'consumptionHistoryIdGet':
			return executeConsumptionHistoryIdGet.call(this, itemIndex ?? 0);
		case 'consumptionHistoryIdElementGet':
			return executeConsumptionHistoryIdElementGet.call(this, itemIndex ?? 0);
		case 'detachGet':
			return executeDetachGet.call(this, itemIndex ?? 0);
		case 'detachPlanCodeGet':
			return executeDetachPlanCodeGet.call(this, itemIndex ?? 0);
		case 'detachPlanCodeExecutePost':
			return executeDetachPlanCodeExecutePost.call(this, itemIndex ?? 0);
		case 'detachPlanCodeOptionsGet':
			return executeDetachPlanCodeOptionsGet.call(this, itemIndex ?? 0);
		case 'detachPlanCodeSimulatePost':
			return executeDetachPlanCodeSimulatePost.call(this, itemIndex ?? 0);
		case 'formGet':
			return executeFormGet.call(this, itemIndex ?? 0);
		case 'formFormNameGet':
			return executeFormFormNameGet.call(this, itemIndex ?? 0);
		case 'formFormNameAnswerPost':
			return executeFormFormNameAnswerPost.call(this, itemIndex ?? 0);
		case 'savingsPlansContractsGet':
			return executeSavingsPlansContractsGet.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribableGet':
			return executeSavingsPlansSubscribableGet.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribeExecutePost':
			return executeSavingsPlansSubscribeExecutePost.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribeSimulatePost':
			return executeSavingsPlansSubscribeSimulatePost.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedGet':
			return executeSavingsPlansSubscribedGet.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdGet':
			return executeSavingsPlansSubscribedSavingsPlanIdGet.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdPut':
			return executeSavingsPlansSubscribedSavingsPlanIdPut.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost':
			return executeSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdChangeSizePost':
			return executeSavingsPlansSubscribedSavingsPlanIdChangeSizePost.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdPeriodsGet':
			return executeSavingsPlansSubscribedSavingsPlanIdPeriodsGet.call(this, itemIndex ?? 0);
		case 'savingsPlansSubscribedSavingsPlanIdTerminatePost':
			return executeSavingsPlansSubscribedSavingsPlanIdTerminatePost.call(this, itemIndex ?? 0);
		case 'upgradeGet':
			return executeUpgradeGet.call(this, itemIndex ?? 0);
		case 'upgradePlanCodeGet':
			return executeUpgradePlanCodeGet.call(this, itemIndex ?? 0);
		case 'upgradePlanCodeExecutePost':
			return executeUpgradePlanCodeExecutePost.call(this, itemIndex ?? 0);
		case 'upgradePlanCodeSimulatePost':
			return executeUpgradePlanCodeSimulatePost.call(this, itemIndex ?? 0);
		case 'optionsGet':
			return executeOptionsGet.call(this, itemIndex ?? 0);
		case 'renewPeriodCapacitiesGet':
			return executeRenewPeriodCapacitiesGet.call(this, itemIndex ?? 0);
		case 'technicalDetailsGet':
			return executeTechnicalDetailsGet.call(this, itemIndex ?? 0);
		case 'terminatePost':
			return executeTerminatePost.call(this, itemIndex ?? 0);
		case 'terminateConfirmPost':
			return executeTerminateConfirmPost.call(this, itemIndex ?? 0);
		case 'terminateSkipRetentionPeriodPost':
			return executeTerminateSkipRetentionPeriodPost.call(this, itemIndex ?? 0);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudServices"`);
}
