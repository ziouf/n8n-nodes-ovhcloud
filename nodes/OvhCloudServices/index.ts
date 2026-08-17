import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionReinstallPost,
	execute as executeReinstallPost,
} from './reinstallPost.operation';
import {
	description as descriptionEngagementAvailableGet,
	execute as executeEngagementAvailableGet,
} from './resources/billing/engagementAvailableGet.operation';
import {
	description as descriptionEngagementEndRulePut,
	execute as executeEngagementEndRulePut,
} from './resources/billing/engagementEndRulePut.operation';
import {
	description as descriptionEngagementFlushPost,
	execute as executeEngagementFlushPost,
} from './resources/billing/engagementFlushPost.operation';
import {
	description as descriptionEngagementGet,
	execute as executeEngagementGet,
} from './resources/billing/engagementGet.operation';
import {
	description as descriptionEngagementRequestDelete,
	execute as executeEngagementRequestDelete,
} from './resources/billing/engagementRequestDelete.operation';
import {
	description as descriptionEngagementRequestGet,
	execute as executeEngagementRequestGet,
} from './resources/billing/engagementRequestGet.operation';
import {
	description as descriptionEngagementRequestPost,
	execute as executeEngagementRequestPost,
} from './resources/billing/engagementRequestPost.operation';
import {
	description as descriptionConsumptionElementGet,
	execute as executeConsumptionElementGet,
} from './resources/consumption/consumptionElementGet.operation';
import {
	description as descriptionConsumptionForecastElementGet,
	execute as executeConsumptionForecastElementGet,
} from './resources/consumption/consumptionForecastElementGet.operation';
import {
	description as descriptionConsumptionForecastGet,
	execute as executeConsumptionForecastGet,
} from './resources/consumption/consumptionForecastGet.operation';
import {
	description as descriptionConsumptionGet,
	execute as executeConsumptionGet,
} from './resources/consumption/consumptionGet.operation';
import {
	description as descriptionConsumptionHistoryGet,
	execute as executeConsumptionHistoryGet,
} from './resources/consumption/consumptionHistoryGet.operation';
import {
	description as descriptionConsumptionHistoryIdElementGet,
	execute as executeConsumptionHistoryIdElementGet,
} from './resources/consumption/consumptionHistoryIdElementGet.operation';
import {
	description as descriptionConsumptionHistoryIdGet,
	execute as executeConsumptionHistoryIdGet,
} from './resources/consumption/consumptionHistoryIdGet.operation';
import {
	description as descriptionDetachGet,
	execute as executeDetachGet,
} from './resources/detach/detachGet.operation';
import {
	description as descriptionDetachPlanCodeExecutePost,
	execute as executeDetachPlanCodeExecutePost,
} from './resources/detach/detachPlanCodeExecutePost.operation';
import {
	description as descriptionDetachPlanCodeGet,
	execute as executeDetachPlanCodeGet,
} from './resources/detach/detachPlanCodeGet.operation';
import {
	description as descriptionDetachPlanCodeOptionsGet,
	execute as executeDetachPlanCodeOptionsGet,
} from './resources/detach/detachPlanCodeOptionsGet.operation';
import {
	description as descriptionDetachPlanCodeSimulatePost,
	execute as executeDetachPlanCodeSimulatePost,
} from './resources/detach/detachPlanCodeSimulatePost.operation';
import {
	description as descriptionFormFormNameAnswerPost,
	execute as executeFormFormNameAnswerPost,
} from './resources/form/formFormNameAnswerPost.operation';
import {
	description as descriptionFormFormNameGet,
	execute as executeFormFormNameGet,
} from './resources/form/formFormNameGet.operation';
import {
	description as descriptionFormGet,
	execute as executeFormGet,
} from './resources/form/formGet.operation';
import {
	description as descriptionOptionsGet,
	execute as executeOptionsGet,
} from './resources/optionsGet.operation';
import {
	description as descriptionRenewPeriodCapacitiesGet,
	execute as executeRenewPeriodCapacitiesGet,
} from './resources/renewPeriodCapacitiesGet.operation';
import {
	description as descriptionSavingsPlansContractsGet,
	execute as executeSavingsPlansContractsGet,
} from './resources/savingsPlans/savingsPlansContractsGet.operation';
import {
	description as descriptionSavingsPlansSubscribableGet,
	execute as executeSavingsPlansSubscribableGet,
} from './resources/savingsPlans/savingsPlansSubscribableGet.operation';
import {
	description as descriptionSavingsPlansSubscribeExecutePost,
	execute as executeSavingsPlansSubscribeExecutePost,
} from './resources/savingsPlans/savingsPlansSubscribeExecutePost.operation';
import {
	description as descriptionSavingsPlansSubscribeSimulatePost,
	execute as executeSavingsPlansSubscribeSimulatePost,
} from './resources/savingsPlans/savingsPlansSubscribeSimulatePost.operation';
import {
	description as descriptionSavingsPlansSubscribedGet,
	execute as executeSavingsPlansSubscribedGet,
} from './resources/savingsPlans/savingsPlansSubscribedGet.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
	execute as executeSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
	execute as executeSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdChangeSizePost.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdGet,
	execute as executeSavingsPlansSubscribedSavingsPlanIdGet,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdGet.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
	execute as executeSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdPeriodsGet.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdPut,
	execute as executeSavingsPlansSubscribedSavingsPlanIdPut,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdPut.operation';
import {
	description as descriptionSavingsPlansSubscribedSavingsPlanIdTerminatePost,
	execute as executeSavingsPlansSubscribedSavingsPlanIdTerminatePost,
} from './resources/savingsPlans/savingsPlansSubscribedSavingsPlanIdTerminatePost.operation';
import {
	description as descriptionTechnicalDetailsGet,
	execute as executeTechnicalDetailsGet,
} from './resources/technicalDetailsGet.operation';
import {
	description as descriptionTerminateConfirmPost,
	execute as executeTerminateConfirmPost,
} from './resources/terminateConfirmPost.operation';
import {
	description as descriptionTerminatePost,
	execute as executeTerminatePost,
} from './resources/terminatePost.operation';
import {
	description as descriptionTerminateSkipRetentionPeriodPost,
	execute as executeTerminateSkipRetentionPeriodPost,
} from './resources/terminateSkipRetentionPeriodPost.operation';
import {
	description as descriptionUpgradeGet,
	execute as executeUpgradeGet,
} from './resources/upgrade/upgradeGet.operation';
import {
	description as descriptionUpgradePlanCodeExecutePost,
	execute as executeUpgradePlanCodeExecutePost,
} from './resources/upgrade/upgradePlanCodeExecutePost.operation';
import {
	description as descriptionUpgradePlanCodeGet,
	execute as executeUpgradePlanCodeGet,
} from './resources/upgrade/upgradePlanCodeGet.operation';
import {
	description as descriptionUpgradePlanCodeSimulatePost,
	execute as executeUpgradePlanCodeSimulatePost,
} from './resources/upgrade/upgradePlanCodeSimulatePost.operation';
import {
	description as descriptionServicesDeleteDelete,
	execute as executeServicesDeleteDelete,
} from './servicesDeleteDelete.operation';
import {
	description as descriptionServicesGetGet,
	execute as executeServicesGetGet,
} from './servicesGetGet.operation';
import {
	description as descriptionServicesListGet,
	execute as executeServicesListGet,
} from './servicesListGet.operation';
import {
	description as descriptionServicesUpdatePut,
	execute as executeServicesUpdatePut,
} from './servicesUpdatePut.operation';
import {
	description as descriptionTaskGetGet,
	execute as executeTaskGetGet,
} from './taskGetGet.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './taskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'servicesOperation',
	'ovhCloudServices',
	[
	{
		name: 'Answer Form',
		value: 'formFormNameAnswerPost',
		action: 'Post answers to the form for your service',
		execute: executeFormFormNameAnswerPost,
		description: descriptionFormFormNameAnswerPost,
	},
	{
		name: 'Change Savings Plan End Action',
		value: 'savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost',
		action: 'Change the action occurring at the end of the Savings Plan period',
		execute: executeSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost,
	},
	{
		name: 'Change Savings Plan Size',
		value: 'savingsPlansSubscribedSavingsPlanIdChangeSizePost',
		action: 'Resize the Savings Plan',
		execute: executeSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdChangeSizePost,
	},
	{
		name: 'Confirm Service Termination',
		value: 'terminateConfirmPost',
		action: 'Confirm service termination',
		execute: executeTerminateConfirmPost,
		description: descriptionTerminateConfirmPost,
	},
	{
		name: 'Delete Engagement Request',
		value: 'engagementRequestDelete',
		action: 'Delete the ongoing Engagement request on this Service',
		execute: executeEngagementRequestDelete,
		description: descriptionEngagementRequestDelete,
	},
	{
		name: 'Delete Service',
		value: 'servicesDeleteDelete',
		action: 'Delete a service',
		execute: executeServicesDeleteDelete,
		description: descriptionServicesDeleteDelete,
	},
	{
		name: 'Execute Detach',
		value: 'detachPlanCodeExecutePost',
		action: 'Perform the migration to a standalone offer',
		execute: executeDetachPlanCodeExecutePost,
		description: descriptionDetachPlanCodeExecutePost,
	},
	{
		name: 'Execute Upgrade',
		value: 'upgradePlanCodeExecutePost',
		action: 'Perform the migration to another offer',
		execute: executeUpgradePlanCodeExecutePost,
		description: descriptionUpgradePlanCodeExecutePost,
	},
	{
		name: 'Flush Engagement',
		value: 'engagementFlushPost',
		action: 'Flush the engagement of this service',
		execute: executeEngagementFlushPost,
		description: descriptionEngagementFlushPost,
	},
	{
		name: 'Get Consumption',
		value: 'consumptionGet',
		action: 'Get a summary of the ongoing consumption of your service',
		execute: executeConsumptionGet,
		description: descriptionConsumptionGet,
	},
	{
		name: 'Get Consumption Elements',
		value: 'consumptionElementGet',
		action: 'Get each resource consumed by your service',
		execute: executeConsumptionElementGet,
		description: descriptionConsumptionElementGet,
	},
	{
		name: 'Get Consumption Forecast',
		value: 'consumptionForecastGet',
		action: 'Get a summary of the forecasted consumption of your service',
		execute: executeConsumptionForecastGet,
		description: descriptionConsumptionForecastGet,
	},
	{
		name: 'Get Consumption History',
		value: 'consumptionHistoryIdGet',
		action: 'Get a summary of the past consumption of your service',
		execute: executeConsumptionHistoryIdGet,
		description: descriptionConsumptionHistoryIdGet,
	},
	{
		name: 'Get Detach Offer',
		value: 'detachPlanCodeGet',
		action: 'View an offer this option can be converted to',
		execute: executeDetachPlanCodeGet,
		description: descriptionDetachPlanCodeGet,
	},
	{
		name: 'Get Engagement',
		value: 'engagementGet',
		action: 'Get engagement details',
		execute: executeEngagementGet,
		description: descriptionEngagementGet,
	},
	{
		name: 'Get Engagement Request',
		value: 'engagementRequestGet',
		action: 'Get the ongoing Engagement request on this Service',
		execute: executeEngagementRequestGet,
		description: descriptionEngagementRequestGet,
	},
	{
		name: 'Get Forecast Consumption Elements',
		value: 'consumptionForecastElementGet',
		action: 'Get each resource forecasted consumption of your service',
		execute: executeConsumptionForecastElementGet,
		description: descriptionConsumptionForecastElementGet,
	},
	{
		name: 'Get Form',
		value: 'formFormNameGet',
		action: 'Get specified form description for service',
		execute: executeFormFormNameGet,
		description: descriptionFormFormNameGet,
	},
	{
		name: 'Get History Consumption Elements',
		value: 'consumptionHistoryIdElementGet',
		action: 'Get each resource consumed for the given history',
		execute: executeConsumptionHistoryIdElementGet,
		description: descriptionConsumptionHistoryIdElementGet,
	},
	{
		name: 'Get Renew Period Capacities',
		value: 'renewPeriodCapacitiesGet',
		action: 'Get possible renew periods of a service',
		execute: executeRenewPeriodCapacitiesGet,
		description: descriptionRenewPeriodCapacitiesGet,
	},
	{
		name: 'Get Service',
		value: 'servicesGetGet',
		action: 'Get service details',
		execute: executeServicesGetGet,
		description: descriptionServicesGetGet,
	},
	{
		name: 'Get Service Options',
		value: 'optionsGet',
		action: 'Get options of a service',
		execute: executeOptionsGet,
		description: descriptionOptionsGet,
	},
	{
		name: 'Get Subscribed Savings Plan',
		value: 'savingsPlansSubscribedSavingsPlanIdGet',
		action: 'Fetch a subscribed Savings Plan',
		execute: executeSavingsPlansSubscribedSavingsPlanIdGet,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdGet,
	},
	{
		name: 'Get Task',
		value: 'taskGetGet',
		action: 'Get task details',
		execute: executeTaskGetGet,
		description: descriptionTaskGetGet,
	},
	{
		name: 'Get Technical Details',
		value: 'technicalDetailsGet',
		action: 'View the technical details of the service',
		execute: executeTechnicalDetailsGet,
		description: descriptionTechnicalDetailsGet,
	},
	{
		name: 'Get Upgrade Offer',
		value: 'upgradePlanCodeGet',
		action: 'View an offer this option can be converted to',
		execute: executeUpgradePlanCodeGet,
		description: descriptionUpgradePlanCodeGet,
	},
	{
		name: 'List Available Engagements',
		value: 'engagementAvailableGet',
		action: 'List all available engagements a service can subscribe to',
		execute: executeEngagementAvailableGet,
		description: descriptionEngagementAvailableGet,
	},
	{
		name: 'List Consumption History',
		value: 'consumptionHistoryGet',
		action: 'List consumption history of your service',
		execute: executeConsumptionHistoryGet,
		description: descriptionConsumptionHistoryGet,
	},
	{
		name: 'List Detach Offers',
		value: 'detachGet',
		action: 'List offers this option can be converted to',
		execute: executeDetachGet,
		description: descriptionDetachGet,
	},
	{
		name: 'List Detach Options',
		value: 'detachPlanCodeOptionsGet',
		action: 'View all offers compatible for the detachment for the given option offer',
		execute: executeDetachPlanCodeOptionsGet,
		description: descriptionDetachPlanCodeOptionsGet,
	},
	{
		name: 'List Forms',
		value: 'formGet',
		action: 'List available forms for service',
		execute: executeFormGet,
		description: descriptionFormGet,
	},
	{
		name: 'List Savings Plan Contracts',
		value: 'savingsPlansContractsGet',
		action: 'List contracts automatically agreed when subscribing to savings plan for this project',
		execute: executeSavingsPlansContractsGet,
		description: descriptionSavingsPlansContractsGet,
	},
	{
		name: 'List Savings Plan Periods',
		value: 'savingsPlansSubscribedSavingsPlanIdPeriodsGet',
		action: 'List the period history of a given Savings Plan',
		execute: executeSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdPeriodsGet,
	},
	{
		name: 'List Services',
		value: 'servicesListGet',
		action: 'List all generic services',
		execute: executeServicesListGet,
		description: descriptionServicesListGet,
		default: true,
	},
	{
		name: 'List Subscribable Savings Plans',
		value: 'savingsPlansSubscribableGet',
		action: 'List subscribable Savings Plan commercial offers for a given Subscription',
		execute: executeSavingsPlansSubscribableGet,
		description: descriptionSavingsPlansSubscribableGet,
	},
	{
		name: 'List Subscribed Savings Plans',
		value: 'savingsPlansSubscribedGet',
		action: 'List subscribed Savings Plans',
		execute: executeSavingsPlansSubscribedGet,
		description: descriptionSavingsPlansSubscribedGet,
	},
	{
		name: 'List Tasks',
		value: 'taskListGet',
		action: 'List tasks for a service',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'List Upgrade Offers',
		value: 'upgradeGet',
		action: 'List offers this option can be converted to',
		execute: executeUpgradeGet,
		description: descriptionUpgradeGet,
	},
	{
		name: 'Reinstall Service',
		value: 'reinstallPost',
		action: 'Reinstall a service',
		execute: executeReinstallPost,
		description: descriptionReinstallPost,
	},
	{
		name: 'Request Engagement',
		value: 'engagementRequestPost',
		action: 'Request an Engagement on this Service',
		execute: executeEngagementRequestPost,
		description: descriptionEngagementRequestPost,
	},
	{
		name: 'Simulate Detach',
		value: 'detachPlanCodeSimulatePost',
		action: 'Simulate the migration to a standalone offer',
		execute: executeDetachPlanCodeSimulatePost,
		description: descriptionDetachPlanCodeSimulatePost,
	},
	{
		name: 'Simulate Savings Plan Subscription',
		value: 'savingsPlansSubscribeSimulatePost',
		action: 'Simulate a Subscription to a Savings Plan',
		execute: executeSavingsPlansSubscribeSimulatePost,
		description: descriptionSavingsPlansSubscribeSimulatePost,
	},
	{
		name: 'Simulate Upgrade',
		value: 'upgradePlanCodeSimulatePost',
		action: 'Simulate the conversion to another offer',
		execute: executeUpgradePlanCodeSimulatePost,
		description: descriptionUpgradePlanCodeSimulatePost,
	},
	{
		name: 'Skip Retention Period',
		value: 'terminateSkipRetentionPeriodPost',
		action: 'Immediately release the resources associated to this Service',
		execute: executeTerminateSkipRetentionPeriodPost,
		description: descriptionTerminateSkipRetentionPeriodPost,
	},
	{
		name: 'Subscribe to Savings Plan',
		value: 'savingsPlansSubscribeExecutePost',
		action: 'Subscribe to a Savings Plan, applicable contracts will be automatically agreed to',
		execute: executeSavingsPlansSubscribeExecutePost,
		description: descriptionSavingsPlansSubscribeExecutePost,
	},
	{
		name: 'Terminate Savings Plan',
		value: 'savingsPlansSubscribedSavingsPlanIdTerminatePost',
		action: 'Terminate the Savings Plan',
		execute: executeSavingsPlansSubscribedSavingsPlanIdTerminatePost,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdTerminatePost,
	},
	{
		name: 'Terminate Service',
		value: 'terminatePost',
		action: 'Request service termination',
		execute: executeTerminatePost,
		description: descriptionTerminatePost,
	},
	{
		name: 'Update Engagement End Rule',
		value: 'engagementEndRulePut',
		action: 'Change Engagement end rules',
		execute: executeEngagementEndRulePut,
		description: descriptionEngagementEndRulePut,
	},
	{
		name: 'Update Service',
		value: 'servicesUpdatePut',
		action: 'Update service details',
		execute: executeServicesUpdatePut,
		description: descriptionServicesUpdatePut,
	},
	{
		name: 'Update Subscribed Savings Plan',
		value: 'savingsPlansSubscribedSavingsPlanIdPut',
		action: 'Update a subscribed Savings Plan',
		execute: executeSavingsPlansSubscribedSavingsPlanIdPut,
		description: descriptionSavingsPlansSubscribedSavingsPlanIdPut,
	},
	],
);

export { description, execute };
