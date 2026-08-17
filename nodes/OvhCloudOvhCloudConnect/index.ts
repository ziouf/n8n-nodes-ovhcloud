import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as changeContactPostExecute } from './resources/main/changeContactPost.operation';
import { execute as confirmTerminationPostExecute } from './resources/main/confirmTerminationPost.operation';
import { execute as logSubscriptionPostExecute } from './resources/log/logSubscriptionPost.operation';
import { execute as monitoringPostExecute } from './resources/main/monitoringPost.operation';
import { execute as popPostExecute } from './resources/config/popPost.operation';
import { execute as popDatacenterPostExecute } from './resources/config/popDatacenterPost.operation';
import { execute as popDatacenterExtraPostExecute } from './resources/config/popDatacenterExtraPost.operation';
import { execute as diagnosticPostExecute } from './resources/main/diagnosticPost.operation';
import { execute as migrationPostExecute } from './resources/main/migrationPost.operation';
import { execute as logSubscriptionDeleteExecute } from './resources/log/logSubscriptionDelete.operation';
import { execute as monitoringDeleteExecute } from './resources/main/monitoringDelete.operation';
import { execute as popDeleteExecute } from './resources/config/popDelete.operation';
import { execute as popDatacenterDeleteExecute } from './resources/config/popDatacenterDelete.operation';
import { execute as popDatacenterExtraDeleteExecute } from './resources/config/popDatacenterExtraDelete.operation';
import { execute as logUrlPostExecute } from './resources/log/logUrlPost.operation';
import { execute as interfaceStatisticsGetExecute } from './resources/main/interfaceStatisticsGet.operation';
import { execute as interfaceStatusGetExecute } from './resources/main/interfaceStatusGet.operation';
import { execute as logKindNameGetExecute } from './resources/log/logKindNameGet.operation';
import { execute as logSubscriptionDetailGetExecute } from './resources/log/logSubscriptionDetailGet.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as popDetailGetExecute } from './resources/config/popDetailGet.operation';
import { execute as popDatacenterDetailGetExecute } from './resources/config/popDatacenterDetailGet.operation';
import { execute as popDatacenterExtraDetailGetExecute } from './resources/config/popDatacenterExtraDetailGet.operation';
import { execute as popStatisticsGetExecute } from './resources/config/popStatisticsGet.operation';
import { execute as popStatusGetExecute } from './resources/config/popStatusGet.operation';
import { execute as diagnosticDetailGetExecute } from './resources/main/diagnosticDetailGet.operation';
import { execute as incidentDetailGetExecute } from './resources/main/incidentDetailGet.operation';
import { execute as interfaceDetailGetExecute } from './resources/main/interfaceDetailGet.operation';
import { execute as migrationGetExecute } from './resources/main/migrationGet.operation';
import { execute as logKindGetExecute } from './resources/log/logKindGet.operation';
import { execute as logSubscriptionGetExecute } from './resources/log/logSubscriptionGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as popGetExecute } from './resources/config/popGet.operation';
import { execute as popDatacenterGetExecute } from './resources/config/popDatacenterGet.operation';
import { execute as popDatacenterExtraGetExecute } from './resources/config/popDatacenterExtraGet.operation';
import { execute as diagnosticGetExecute } from './resources/main/diagnosticGet.operation';
import { execute as incidentGetExecute } from './resources/main/incidentGet.operation';
import { execute as interfaceGetExecute } from './resources/main/interfaceGet.operation';
import { execute as monitoringGetExecute } from './resources/main/monitoringGet.operation';
import { execute as interfaceLockPostExecute } from './resources/main/interfaceLockPost.operation';
import { execute as interfaceUnlockPostExecute } from './resources/main/interfaceUnlockPost.operation';
import { execute as updatePutExecute } from './resources/main/updatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'ovhCloudConnectOperation',
	'ovhcloudconnect',
	[
	{
		name: 'Change Service Contact',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure for an OvhCloud Connect service',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm the termination of an OvhCloud Connect service',
		execute: confirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Create Log Subscription',
		value: 'logSubscriptionPost',
		action: 'Create a log subscription for an OvhCloud Connect service',
		execute: logSubscriptionPostExecute,
		description: noProps,
	},
	{
		name: 'Create Monitoring Subscription',
		value: 'monitoringPost',
		action: 'Create a new monitoring subscription for an OvhCloud Connect service',
		execute: monitoringPostExecute,
		description: noProps,
	},
	{
		name: 'Create POP Configuration',
		value: 'popPost',
		action: 'Create a new POP configuration for an OvhCloud Connect service',
		execute: popPostExecute,
		description: noProps,
	},
	{
		name: 'Create POP Datacenter Configuration',
		value: 'popDatacenterPost',
		action: 'Create a new datacenter configuration for a POP configuration',
		execute: popDatacenterPostExecute,
		description: noProps,
	},
	{
		name: 'Create POP Datacenter Extra Configuration',
		value: 'popDatacenterExtraPost',
		action: 'Create a new extra configuration for a datacenter configuration',
		execute: popDatacenterExtraPostExecute,
		description: noProps,
	},
	{
		name: 'Create Service Diagnostic',
		value: 'diagnosticPost',
		action: 'Create a new diagnostic configuration for an OvhCloud Connect service',
		execute: diagnosticPostExecute,
		description: noProps,
	},
	{
		name: 'Create Service Migration',
		value: 'migrationPost',
		action: 'Create a new migration service for an OvhCloud Connect service',
		execute: migrationPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Log Subscription',
		value: 'logSubscriptionDelete',
		action: 'Delete a specific log subscription of an OvhCloud Connect service',
		execute: logSubscriptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Monitoring Subscription',
		value: 'monitoringDelete',
		action: 'Delete a monitoring subscription of an OvhCloud Connect service',
		execute: monitoringDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete POP Configuration',
		value: 'popDelete',
		action: 'Delete a specific POP configuration of an OvhCloud Connect service',
		execute: popDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete POP Datacenter Configuration',
		value: 'popDatacenterDelete',
		action: 'Delete a specific datacenter configuration of a POP configuration',
		execute: popDatacenterDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete POP Datacenter Extra Configuration',
		value: 'popDatacenterExtraDelete',
		action: 'Delete a specific extra configuration of a datacenter configuration',
		execute: popDatacenterExtraDeleteExecute,
		description: noProps,
	},
	{
		name: 'Generate Temporary Logs URL',
		value: 'logUrlPost',
		action: 'Generate a temporary URL to retrieve the logs of an OvhCloud Connect service',
		execute: logUrlPostExecute,
		description: noProps,
	},
	{
		name: 'Get Interface Statistics',
		value: 'interfaceStatisticsGet',
		action: 'Get the statistics for a specific interface of an OvhCloud Connect service',
		execute: interfaceStatisticsGetExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Get Interface Status',
		value: 'interfaceStatusGet',
		action: 'Get the current status of an interface of an OvhCloud Connect service',
		execute: interfaceStatusGetExecute,
		description: noProps,
	},
	{
		name: 'Get Log Kind Details',
		value: 'logKindNameGet',
		action: 'Get the details of a specific log kind of an OvhCloud Connect service',
		execute: logKindNameGetExecute,
		description: noProps,
	},
	{
		name: 'Get Log Subscription Details',
		value: 'logSubscriptionDetailGet',
		action: 'Get the details of a specific log subscription of an OvhCloud Connect service',
		execute: logSubscriptionDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get OvhCloud Connect Service',
		value: 'get',
		action: 'Get the details of an OvhCloud Connect service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get POP Configuration',
		value: 'popDetailGet',
		action: 'Get a specific POP configuration of an OvhCloud Connect service',
		execute: popDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get POP Datacenter Configuration',
		value: 'popDatacenterDetailGet',
		action: 'Get a specific datacenter configuration of a POP configuration',
		execute: popDatacenterDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get POP Datacenter Extra Configuration',
		value: 'popDatacenterExtraDetailGet',
		action: 'Get a specific extra configuration of a datacenter configuration',
		execute: popDatacenterExtraDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get POP Statistics',
		value: 'popStatisticsGet',
		action: 'Get the statistics for a POP configuration of an OvhCloud Connect service',
		execute: popStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'Get POP Status',
		value: 'popStatusGet',
		action: 'Get the current status of a POP configuration of an OvhCloud Connect service',
		execute: popStatusGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Diagnostic',
		value: 'diagnosticDetailGet',
		action: 'Get the details of a specific diagnostic of an OvhCloud Connect service',
		execute: diagnosticDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Incident',
		value: 'incidentDetailGet',
		action: 'Get the details of a specific incident of an OvhCloud Connect service',
		execute: incidentDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Interface',
		value: 'interfaceDetailGet',
		action: 'Get the details of a specific interface of an OvhCloud Connect service',
		execute: interfaceDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Migration',
		value: 'migrationGet',
		action: 'Get the migration service information of an OvhCloud Connect service',
		execute: migrationGetExecute,
		description: noProps,
	},
	{
		name: 'List Available Log Kinds',
		value: 'logKindGet',
		action: 'List the available log kinds for an OvhCloud Connect service',
		execute: logKindGetExecute,
		description: noProps,
	},
	{
		name: 'List Log Subscriptions',
		value: 'logSubscriptionGet',
		action: 'List the log subscriptions for an OvhCloud Connect service',
		execute: logSubscriptionGetExecute,
		description: noProps,
	},
	{
		name: 'List OvhCloud Connect Services',
		value: 'list',
		action: 'List the available OvhCloud Connect services',
		execute: listExecute,
		description: noProps,
	},
	{
		name: 'List POP Configurations',
		value: 'popGet',
		action: 'List the POP configurations linked to an OvhCloud Connect service',
		execute: popGetExecute,
		description: noProps,
	},
	{
		name: 'List POP Datacenter Configurations',
		value: 'popDatacenterGet',
		action: 'List the datacenter configurations linked to a POP configuration',
		execute: popDatacenterGetExecute,
		description: noProps,
	},
	{
		name: 'List POP Datacenter Extra Configurations',
		value: 'popDatacenterExtraGet',
		action: 'List the extra configurations for a datacenter configuration',
		execute: popDatacenterExtraGetExecute,
		description: noProps,
	},
	{
		name: 'List Service Diagnostics',
		value: 'diagnosticGet',
		action: 'List the diagnostics linked to an OvhCloud Connect service',
		execute: diagnosticGetExecute,
		description: noProps,
	},
	{
		name: 'List Service Incidents',
		value: 'incidentGet',
		action: 'List the incidents linked to an OvhCloud Connect service',
		execute: incidentGetExecute,
		description: noProps,
	},
	{
		name: 'List Service Interfaces',
		value: 'interfaceGet',
		action: 'List the interfaces linked to an OvhCloud Connect service',
		execute: interfaceGetExecute,
		description: noProps,
	},
	{
		name: 'List Service Monitoring Alerts',
		value: 'monitoringGet',
		action: 'List the monitoring alerts for an OvhCloud Connect service',
		execute: monitoringGetExecute,
		description: noProps,
	},
	{
		name: 'Lock Service Interface',
		value: 'interfaceLockPost',
		action: 'Lock a specific interface of an OvhCloud Connect service',
		execute: interfaceLockPostExecute,
		description: noProps,
	},
	{
		name: 'Unlock Service Interface',
		value: 'interfaceUnlockPost',
		action: 'Unlock a specific interface of an OvhCloud Connect service',
		execute: interfaceUnlockPostExecute,
		description: noProps,
	},
	{
		name: 'Update OvhCloud Connect Service',
		value: 'updatePut',
		action: 'Modify an OvhCloud Connect service',
		execute: updatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
