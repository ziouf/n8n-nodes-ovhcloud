/**
 * @brief IP Load Balancing resource operations for n8n node
 *
 * Provides operations for managing OVH IP Load Balancers including:
 * - List all IP Load Balancers for the authenticated account
 * - Get detailed information about a specific IP Load Balancer
 * - Manage HTTP/TCP/UDP farms, frontends, routes, and route rules
 * - Manage SSL certificates, tasks, vRack networks, log subscriptions
 * - And many more sub-resources
 *
 * @remarks
 * IP Load Balancers are managed under `/ipLoadbalancing` route.
 * Service name can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import { descriptionGetServiceInfos, executeGetServiceInfos, descriptionUpdateServiceInfos, executeUpdateServiceInfos  } from './resources/serviceInfos';
import { descriptionChangeContact, executeChangeContact } from './resources/changeContact';
import { descriptionTerminate, executeTerminate } from './resources/terminate';
import {
	descriptionConfirmTermination,
	executeConfirmTermination,
} from './resources/confirmTermination';
import { descriptionRefresh, executeRefresh } from './resources/refresh';
import { descriptionStatus, executeStatus } from './resources/status';
import { descriptionListFailover, executeListFailover } from './resources/failover';
import { descriptionInstancesState, executeInstancesState } from './resources/instancesState';
import { descriptionMetricsToken, executeMetricsToken } from './resources/metricsToken';
import { descriptionListNatIp, executeListNatIp } from './resources/natIp';
import {
	descriptionListPendingChanges,
	executeListPendingChanges,
} from './resources/pendingChanges';
import { descriptionListQuota, executeListQuota, descriptionGetQuota, executeGetQuota , descriptionUpdateQuota, executeUpdateQuota  } from './resources/quota';
import { descriptionListQuotaHistory, executeListQuotaHistory, descriptionGetQuotaHistory, executeGetQuotaHistory  } from './resources/quotaHistory';
import { descriptionListZone, executeListZone, descriptionGetZone, executeGetZone , descriptionTerminateZone, executeTerminateZone , descriptionCancelTerminationZone, executeCancelTerminationZone  } from './resources/zone';
import { descriptionListSsl, executeListSsl, descriptionCreateSsl, executeCreateSsl , descriptionGetSsl, executeGetSsl , descriptionDeleteSsl, executeDeleteSsl , descriptionUpdateSsl, executeUpdateSsl  } from './resources/ssl';
import { descriptionListHttpFarms, executeListHttpFarms, descriptionCreateHttpFarm, executeCreateHttpFarm , descriptionGetHttpFarm, executeGetHttpFarm , descriptionUpdateHttpFarm, executeUpdateHttpFarm , descriptionDeleteHttpFarm, executeDeleteHttpFarm  } from './resources/httpFarm';
import {
	descriptionListHttpFarmServers,
	executeListHttpFarmServers,
	descriptionCreateHttpFarmServer,
	executeCreateHttpFarmServer, descriptionGetHttpFarmServer, executeGetHttpFarmServer ,
	descriptionDeleteHttpFarmServer,
	executeDeleteHttpFarmServer,
	descriptionUpdateHttpFarmServer,
	executeUpdateHttpFarmServer
} from './resources/httpFarmServer';
import { descriptionListHttpFrontends, executeListHttpFrontends, descriptionCreateHttpFrontend, executeCreateHttpFrontend , descriptionGetHttpFrontend, executeGetHttpFrontend , descriptionDeleteHttpFrontend, executeDeleteHttpFrontend , descriptionUpdateHttpFrontend, executeUpdateHttpFrontend  } from './resources/httpFrontend';
import { descriptionListHttpRoutes, executeListHttpRoutes, descriptionCreateHttpRoute, executeCreateHttpRoute , descriptionGetHttpRoute, executeGetHttpRoute , descriptionDeleteHttpRoute, executeDeleteHttpRoute , descriptionUpdateHttpRoute, executeUpdateHttpRoute  } from './resources/httpRoute';
import {
	descriptionListHttpRouteRules,
	executeListHttpRouteRules,
	descriptionCreateHttpRouteRule,
	executeCreateHttpRouteRule, descriptionGetHttpRouteRule, executeGetHttpRouteRule ,
	descriptionDeleteHttpRouteRule,
	executeDeleteHttpRouteRule,
	descriptionUpdateHttpRouteRule,
	executeUpdateHttpRouteRule
} from './resources/httpRouteRule';
import { descriptionListTcpFarms, executeListTcpFarms, descriptionCreateTcpFarm, executeCreateTcpFarm , descriptionGetTcpFarm, executeGetTcpFarm , descriptionDeleteTcpFarm, executeDeleteTcpFarm , descriptionUpdateTcpFarm, executeUpdateTcpFarm  } from './resources/tcpFarm';
import {
	descriptionListTcpFarmServers,
	executeListTcpFarmServers,
	descriptionCreateTcpFarmServer,
	executeCreateTcpFarmServer, descriptionGetTcpFarmServer, executeGetTcpFarmServer ,
	descriptionDeleteTcpFarmServer,
	executeDeleteTcpFarmServer,
	descriptionUpdateTcpFarmServer,
	executeUpdateTcpFarmServer
} from './resources/tcpFarmServer';
import { descriptionListTcpFrontends, executeListTcpFrontends, descriptionCreateTcpFrontend, executeCreateTcpFrontend , descriptionGetTcpFrontend, executeGetTcpFrontend , descriptionDeleteTcpFrontend, executeDeleteTcpFrontend , descriptionUpdateTcpFrontend, executeUpdateTcpFrontend  } from './resources/tcpFrontend';
import { descriptionListTcpRoutes, executeListTcpRoutes, descriptionCreateTcpRoute, executeCreateTcpRoute , descriptionGetTcpRoute, executeGetTcpRoute , descriptionDeleteTcpRoute, executeDeleteTcpRoute , descriptionUpdateTcpRoute, executeUpdateTcpRoute  } from './resources/tcpRoute';
import { descriptionListTcpRouteRules, executeListTcpRouteRules, descriptionCreateTcpRouteRule, executeCreateTcpRouteRule , descriptionGetTcpRouteRule, executeGetTcpRouteRule , descriptionDeleteTcpRouteRule, executeDeleteTcpRouteRule , descriptionUpdateTcpRouteRule, executeUpdateTcpRouteRule  } from './resources/tcpRouteRule';
import { descriptionListUdpFarms, executeListUdpFarms, descriptionCreateUdpFarm, executeCreateUdpFarm , descriptionGetUdpFarm, executeGetUdpFarm , descriptionDeleteUdpFarm, executeDeleteUdpFarm , descriptionUpdateUdpFarm, executeUpdateUdpFarm  } from './resources/udpFarm';
import {
	descriptionListUdpFarmServers,
	executeListUdpFarmServers,
	descriptionCreateUdpFarmServer,
	executeCreateUdpFarmServer, descriptionGetUdpFarmServer, executeGetUdpFarmServer ,
	descriptionDeleteUdpFarmServer,
	executeDeleteUdpFarmServer,
	descriptionUpdateUdpFarmServer,
	executeUpdateUdpFarmServer
} from './resources/udpFarmServer';
import { descriptionListUdpFrontends, executeListUdpFrontends, descriptionCreateUdpFrontend, executeCreateUdpFrontend , descriptionGetUdpFrontend, executeGetUdpFrontend , descriptionDeleteUdpFrontend, executeDeleteUdpFrontend , descriptionUpdateUdpFrontend, executeUpdateUdpFrontend  } from './resources/udpFrontend';
import { descriptionListVrackNetworks, executeListVrackNetworks, descriptionCreateVrackNetwork, executeCreateVrackNetwork , descriptionGetVrackNetwork, executeGetVrackNetwork , descriptionDeleteVrackNetwork, executeDeleteVrackNetwork , descriptionUpdateVrackNetwork, executeUpdateVrackNetwork ,
	descriptionUpdateVrackNetworkFarmId,
	executeUpdateVrackNetworkFarmId } from './resources/vrackNetwork';
import { descriptionVrackStatus, executeVrackStatus } from './resources/vrackStatus';
import {
	descriptionVrackNetworkCreationRules,
	executeVrackNetworkCreationRules,
} from './resources/vrackNetworkCreationRules';
import { descriptionListTasks, executeListTasks, descriptionGetTask, executeGetTask  } from './resources/task';
import {
	descriptionListLogSubscriptions,
	executeListLogSubscriptions,
	descriptionCreateLogSubscription,
	executeCreateLogSubscription,
	descriptionGetLogSubscription,
	executeGetLogSubscription,
	descriptionDeleteLogSubscription,
	executeDeleteLogSubscription
} from './resources/logSubscription';
import { descriptionListLogKind, executeListLogKind, descriptionGetLogKind, executeGetLogKind  } from './resources/logKind';
import { descriptionGenerateLogUrl, executeGenerateLogUrl } from './resources/logUrl';
import { descriptionFreeCertificate, executeFreeCertificate } from './resources/freeCertificate';
import { descriptionListDefinedFarms, executeListDefinedFarms } from './resources/definedFarms';
import {
	descriptionListDefinedFrontends,
	executeListDefinedFrontends,
} from './resources/definedFrontends';
import { descriptionListDefinedRoutes, executeListDefinedRoutes } from './resources/definedRoutes';
import {
	descriptionListAvailableFarmProbes,
	executeListAvailableFarmProbes,
} from './resources/availableFarmProbes';
import {
	descriptionListAvailableFarmType,
	executeListAvailableFarmType,
} from './resources/availableFarmType';
import {
	descriptionListAvailableFrontendType,
	executeListAvailableFrontendType,
} from './resources/availableFrontendType';
import {
	descriptionListAvailableRouteActions,
	executeListAvailableRouteActions,
} from './resources/availableRouteActions';
import {
	descriptionListAvailableRouteRules,
	executeListAvailableRouteRules,
} from './resources/availableRouteRules';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Load Balancing Operation',
			name: 'ipLoadbalancingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all IP Load Balancers',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IP Load Balancer',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update an IP Load Balancer',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for an IP Load Balancer',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for an IP Load Balancer',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change contact for an IP Load Balancer',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate an IP Load Balancer service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of an IP Load Balancer service',
				},
				{
					name: 'Refresh',
					value: 'refresh',
					action: 'Apply configuration to an IP Load Balancer',
				},
				{
					name: 'Get Status',
					value: 'status',
					action: 'Get global status of an IP Load Balancer',
				},
				{
					name: 'List Failover IPs',
					value: 'listFailover',
					action: 'List failover IPs for an IP Load Balancer',
				},
				{
					name: 'Get Instances State',
					value: 'instancesState',
					action: 'Get instances state of an IP Load Balancer',
				},
				{
					name: 'Get Metrics Token',
					value: 'metricsToken',
					action: 'Get metrics token for an IP Load Balancer',
				},
				{
					name: 'List NAT IPs',
					value: 'listNatIp',
					action: 'List NAT IPs for an IP Load Balancer',
				},
				{
					name: 'List Pending Changes',
					value: 'listPendingChanges',
					action: 'List pending changes for an IP Load Balancer',
				},
				{
					name: 'List Quotas',
					value: 'listQuota',
					action: 'List quotas for an IP Load Balancer',
				},
				{
					name: 'Get Quota',
					value: 'getQuota',
					action: 'Get quota for an IP Load Balancer',
				},
				{
					name: 'Update Quota',
					value: 'updateQuota',
					action: 'Update quota for an IP Load Balancer',
				},
				{
					name: 'List Quota History',
					value: 'listQuotaHistory',
					action: 'List quota history for an IP Load Balancer',
				},
				{
					name: 'Get Quota History',
					value: 'getQuotaHistory',
					action: 'Get quota history for an IP Load Balancer',
				},
				{
					name: 'List Zones',
					value: 'listZone',
					action: 'List zones for an IP Load Balancer',
				},
				{
					name: 'Get Zone',
					value: 'getZone',
					action: 'Get a zone for an IP Load Balancer',
				},
				{
					name: 'Terminate Zone',
					value: 'terminateZone',
					action: 'Terminate a zone for an IP Load Balancer',
				},
				{
					name: 'Cancel Termination Zone',
					value: 'cancelTerminationZone',
					action: 'Cancel termination of a zone for an IP Load Balancer',
				},
				{
					name: 'List SSL Certificates',
					value: 'listSsl',
					action: 'List SSL certificates for an IP Load Balancer',
				},
				{
					name: 'Create SSL Certificate',
					value: 'createSsl',
					action: 'Create an SSL certificate for an IP Load Balancer',
				},
				{
					name: 'Get SSL Certificate',
					value: 'getSsl',
					action: 'Get an SSL certificate for an IP Load Balancer',
				},
				{
					name: 'Delete SSL Certificate',
					value: 'deleteSsl',
					action: 'Delete an SSL certificate for an IP Load Balancer',
				},
				{
					name: 'Update SSL Certificate',
					value: 'updateSsl',
					action: 'Update an SSL certificate for an IP Load Balancer',
				},
				{
					name: 'List HTTP Farms',
					value: 'listHttpFarms',
					action: 'List HTTP farms for an IP Load Balancer',
				},
				{
					name: 'Create HTTP Farm',
					value: 'createHttpFarm',
					action: 'Create an HTTP farm for an IP Load Balancer',
				},
				{
					name: 'Get HTTP Farm',
					value: 'getHttpFarm',
					action: 'Get an HTTP farm for an IP Load Balancer',
				},
				{
					name: 'Update HTTP Farm',
					value: 'updateHttpFarm',
					action: 'Update an HTTP farm for an IP Load Balancer',
				},
				{
					name: 'Delete HTTP Farm',
					value: 'deleteHttpFarm',
					action: 'Delete an HTTP farm for an IP Load Balancer',
				},
				{
					name: 'List HTTP Farm Servers',
					value: 'listHttpFarmServers',
					action: 'List HTTP farm servers for an IP Load Balancer',
				},
				{
					name: 'Create HTTP Farm Server',
					value: 'createHttpFarmServer',
					action: 'Create an HTTP farm server for an IP Load Balancer',
				},
				{
					name: 'Get HTTP Farm Server',
					value: 'getHttpFarmServer',
					action: 'Get an HTTP farm server for an IP Load Balancer',
				},
				{
					name: 'Delete HTTP Farm Server',
					value: 'deleteHttpFarmServer',
					action: 'Delete an HTTP farm server for an IP Load Balancer',
				},
				{
					name: 'Update HTTP Farm Server',
					value: 'updateHttpFarmServer',
					action: 'Update an HTTP farm server for an IP Load Balancer',
				},
				{
					name: 'List HTTP Frontends',
					value: 'listHttpFrontends',
					action: 'List HTTP frontends for an IP Load Balancer',
				},
				{
					name: 'Create HTTP Frontend',
					value: 'createHttpFrontend',
					action: 'Create an HTTP frontend for an IP Load Balancer',
				},
				{
					name: 'Get HTTP Frontend',
					value: 'getHttpFrontend',
					action: 'Get an HTTP frontend for an IP Load Balancer',
				},
				{
					name: 'Delete HTTP Frontend',
					value: 'deleteHttpFrontend',
					action: 'Delete an HTTP frontend for an IP Load Balancer',
				},
				{
					name: 'Update HTTP Frontend',
					value: 'updateHttpFrontend',
					action: 'Update an HTTP frontend for an IP Load Balancer',
				},
				{
					name: 'List HTTP Routes',
					value: 'listHttpRoutes',
					action: 'List HTTP routes for an IP Load Balancer',
				},
				{
					name: 'Create HTTP Route',
					value: 'createHttpRoute',
					action: 'Create an HTTP route for an IP Load Balancer',
				},
				{
					name: 'Get HTTP Route',
					value: 'getHttpRoute',
					action: 'Get an HTTP route for an IP Load Balancer',
				},
				{
					name: 'Delete HTTP Route',
					value: 'deleteHttpRoute',
					action: 'Delete an HTTP route for an IP Load Balancer',
				},
				{
					name: 'Update HTTP Route',
					value: 'updateHttpRoute',
					action: 'Update an HTTP route for an IP Load Balancer',
				},
				{
					name: 'List HTTP Route Rules',
					value: 'listHttpRouteRules',
					action: 'List HTTP route rules for an IP Load Balancer',
				},
				{
					name: 'Create HTTP Route Rule',
					value: 'createHttpRouteRule',
					action: 'Create an HTTP route rule for an IP Load Balancer',
				},
				{
					name: 'Get HTTP Route Rule',
					value: 'getHttpRouteRule',
					action: 'Get an HTTP route rule for an IP Load Balancer',
				},
				{
					name: 'Delete HTTP Route Rule',
					value: 'deleteHttpRouteRule',
					action: 'Delete an HTTP route rule for an IP Load Balancer',
				},
				{
					name: 'Update HTTP Route Rule',
					value: 'updateHttpRouteRule',
					action: 'Update an HTTP route rule for an IP Load Balancer',
				},
				{
					name: 'List TCP Farms',
					value: 'listTcpFarms',
					action: 'List TCP farms for an IP Load Balancer',
				},
				{
					name: 'Create TCP Farm',
					value: 'createTcpFarm',
					action: 'Create a TCP farm for an IP Load Balancer',
				},
				{
					name: 'Get TCP Farm',
					value: 'getTcpFarm',
					action: 'Get a TCP farm for an IP Load Balancer',
				},
				{
					name: 'Delete TCP Farm',
					value: 'deleteTcpFarm',
					action: 'Delete a TCP farm for an IP Load Balancer',
				},
				{
					name: 'Update TCP Farm',
					value: 'updateTcpFarm',
					action: 'Update a TCP farm for an IP Load Balancer',
				},
				{
					name: 'List TCP Farm Servers',
					value: 'listTcpFarmServers',
					action: 'List TCP farm servers for an IP Load Balancer',
				},
				{
					name: 'Create TCP Farm Server',
					value: 'createTcpFarmServer',
					action: 'Create a TCP farm server for an IP Load Balancer',
				},
				{
					name: 'Get TCP Farm Server',
					value: 'getTcpFarmServer',
					action: 'Get a TCP farm server for an IP Load Balancer',
				},
				{
					name: 'Delete TCP Farm Server',
					value: 'deleteTcpFarmServer',
					action: 'Delete a TCP farm server for an IP Load Balancer',
				},
				{
					name: 'Update TCP Farm Server',
					value: 'updateTcpFarmServer',
					action: 'Update a TCP farm server for an IP Load Balancer',
				},
				{
					name: 'List TCP Frontends',
					value: 'listTcpFrontends',
					action: 'List TCP frontends for an IP Load Balancer',
				},
				{
					name: 'Create TCP Frontend',
					value: 'createTcpFrontend',
					action: 'Create a TCP frontend for an IP Load Balancer',
				},
				{
					name: 'Get TCP Frontend',
					value: 'getTcpFrontend',
					action: 'Get a TCP frontend for an IP Load Balancer',
				},
				{
					name: 'Delete TCP Frontend',
					value: 'deleteTcpFrontend',
					action: 'Delete a TCP frontend for an IP Load Balancer',
				},
				{
					name: 'Update TCP Frontend',
					value: 'updateTcpFrontend',
					action: 'Update a TCP frontend for an IP Load Balancer',
				},
				{
					name: 'List TCP Routes',
					value: 'listTcpRoutes',
					action: 'List TCP routes for an IP Load Balancer',
				},
				{
					name: 'Create TCP Route',
					value: 'createTcpRoute',
					action: 'Create a TCP route for an IP Load Balancer',
				},
				{
					name: 'Get TCP Route',
					value: 'getTcpRoute',
					action: 'Get a TCP route for an IP Load Balancer',
				},
				{
					name: 'Delete TCP Route',
					value: 'deleteTcpRoute',
					action: 'Delete a TCP route for an IP Load Balancer',
				},
				{
					name: 'Update TCP Route',
					value: 'updateTcpRoute',
					action: 'Update a TCP route for an IP Load Balancer',
				},
				{
					name: 'List TCP Route Rules',
					value: 'listTcpRouteRules',
					action: 'List TCP route rules for an IP Load Balancer',
				},
				{
					name: 'Create TCP Route Rule',
					value: 'createTcpRouteRule',
					action: 'Create a TCP route rule for an IP Load Balancer',
				},
				{
					name: 'Get TCP Route Rule',
					value: 'getTcpRouteRule',
					action: 'Get a TCP route rule for an IP Load Balancer',
				},
				{
					name: 'Delete TCP Route Rule',
					value: 'deleteTcpRouteRule',
					action: 'Delete a TCP route rule for an IP Load Balancer',
				},
				{
					name: 'Update TCP Route Rule',
					value: 'updateTcpRouteRule',
					action: 'Update a TCP route rule for an IP Load Balancer',
				},
				{
					name: 'List UDP Farms',
					value: 'listUdpFarms',
					action: 'List UDP farms for an IP Load Balancer',
				},
				{
					name: 'Create UDP Farm',
					value: 'createUdpFarm',
					action: 'Create a UDP farm for an IP Load Balancer',
				},
				{
					name: 'Get UDP Farm',
					value: 'getUdpFarm',
					action: 'Get a UDP farm for an IP Load Balancer',
				},
				{
					name: 'Delete UDP Farm',
					value: 'deleteUdpFarm',
					action: 'Delete a UDP farm for an IP Load Balancer',
				},
				{
					name: 'Update UDP Farm',
					value: 'updateUdpFarm',
					action: 'Update a UDP farm for an IP Load Balancer',
				},
				{
					name: 'List UDP Farm Servers',
					value: 'listUdpFarmServers',
					action: 'List UDP farm servers for an IP Load Balancer',
				},
				{
					name: 'Create UDP Farm Server',
					value: 'createUdpFarmServer',
					action: 'Create a UDP farm server for an IP Load Balancer',
				},
				{
					name: 'Get UDP Farm Server',
					value: 'getUdpFarmServer',
					action: 'Get a UDP farm server for an IP Load Balancer',
				},
				{
					name: 'Delete UDP Farm Server',
					value: 'deleteUdpFarmServer',
					action: 'Delete a UDP farm server for an IP Load Balancer',
				},
				{
					name: 'Update UDP Farm Server',
					value: 'updateUdpFarmServer',
					action: 'Update a UDP farm server for an IP Load Balancer',
				},
				{
					name: 'List UDP Frontends',
					value: 'listUdpFrontends',
					action: 'List UDP frontends for an IP Load Balancer',
				},
				{
					name: 'Create UDP Frontend',
					value: 'createUdpFrontend',
					action: 'Create a UDP frontend for an IP Load Balancer',
				},
				{
					name: 'Get UDP Frontend',
					value: 'getUdpFrontend',
					action: 'Get a UDP frontend for an IP Load Balancer',
				},
				{
					name: 'Delete UDP Frontend',
					value: 'deleteUdpFrontend',
					action: 'Delete a UDP frontend for an IP Load Balancer',
				},
				{
					name: 'Update UDP Frontend',
					value: 'updateUdpFrontend',
					action: 'Update a UDP frontend for an IP Load Balancer',
				},
				{
					name: 'List vRack Networks',
					value: 'listVrackNetworks',
					action: 'List vRack networks for an IP Load Balancer',
				},
				{
					name: 'Create vRack Network',
					value: 'createVrackNetwork',
					action: 'Create a vRack network for an IP Load Balancer',
				},
				{
					name: 'Get vRack Network',
					value: 'getVrackNetwork',
					action: 'Get a vRack network for an IP Load Balancer',
				},
				{
					name: 'Delete vRack Network',
					value: 'deleteVrackNetwork',
					action: 'Delete a vRack network for an IP Load Balancer',
				},
				{
					name: 'Update vRack Network',
					value: 'updateVrackNetwork',
					action: 'Update a vRack network for an IP Load Balancer',
				},
				{
					name: 'Update vRack Network Farm IDs',
					value: 'updateVrackNetworkFarmId',
					action: 'Update farm IDs for a vRack network',
				},
				{
					name: 'Get vRack Status',
					value: 'vrackStatus',
					action: 'Get vRack status for an IP Load Balancer',
				},
				{
					name: 'Get vRack Network Creation Rules',
					value: 'vrackNetworkCreationRules',
					action: 'Get vRack network creation rules',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List tasks for an IP Load Balancer',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get a task for an IP Load Balancer',
				},
				{
					name: 'List Log Subscriptions',
					value: 'listLogSubscriptions',
					action: 'List log subscriptions for an IP Load Balancer',
				},
				{
					name: 'Create Log Subscription',
					value: 'createLogSubscription',
					action: 'Create a log subscription for an IP Load Balancer',
				},
				{
					name: 'Get Log Subscription',
					value: 'getLogSubscription',
					action: 'Get a log subscription for an IP Load Balancer',
				},
				{
					name: 'Delete Log Subscription',
					value: 'deleteLogSubscription',
					action: 'Delete a log subscription for an IP Load Balancer',
				},
				{
					name: 'List Log Kinds',
					value: 'listLogKind',
					action: 'List log kinds for an IP Load Balancer',
				},
				{
					name: 'Get Log Kind',
					value: 'getLogKind',
					action: 'Get a log kind for an IP Load Balancer',
				},
				{
					name: 'Generate Log URL',
					value: 'generateLogUrl',
					action: 'Generate a log URL for an IP Load Balancer',
				},
				{
					name: 'Order Free Certificate',
					value: 'freeCertificate',
					action: 'Order a free certificate for an IP Load Balancer',
				},
				{
					name: 'List Defined Farms',
					value: 'listDefinedFarms',
					action: 'List defined farms for an IP Load Balancer',
				},
				{
					name: 'List Defined Frontends',
					value: 'listDefinedFrontends',
					action: 'List defined frontends for an IP Load Balancer',
				},
				{
					name: 'List Defined Routes',
					value: 'listDefinedRoutes',
					action: 'List defined routes for an IP Load Balancer',
				},
				{
					name: 'List Available Farm Probes',
					value: 'listAvailableFarmProbes',
					action: 'List available farm probes for an IP Load Balancer',
				},
				{
					name: 'List Available Farm Types',
					value: 'listAvailableFarmType',
					action: 'List available farm types for an IP Load Balancer',
				},
				{
					name: 'List Available Frontend Types',
					value: 'listAvailableFrontendType',
					action: 'List available frontend types for an IP Load Balancer',
				},
				{
					name: 'List Available Route Actions',
					value: 'listAvailableRouteActions',
					action: 'List available route actions for an IP Load Balancer',
				},
				{
					name: 'List Available Route Rules',
					value: 'listAvailableRouteRules',
					action: 'List available route rules for an IP Load Balancer',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['update'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateServiceInfos'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['changeContact'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['confirmTermination'] },
		}),
		...descriptionRefresh({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['refresh'] },
		}),
		...descriptionStatus({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['status'] },
		}),
		...descriptionListFailover({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listFailover'] },
		}),
		...descriptionInstancesState({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['instancesState'] },
		}),
		...descriptionMetricsToken({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['metricsToken'] },
		}),
		...descriptionListNatIp({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listNatIp'] },
		}),
		...descriptionListPendingChanges({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listPendingChanges'] },
		}),
		...descriptionListQuota({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listQuota'] },
		}),
		...descriptionGetQuota({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getQuota'] },
		}),
		...descriptionUpdateQuota({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateQuota'] },
		}),
		...descriptionListQuotaHistory({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listQuotaHistory'] },
		}),
		...descriptionGetQuotaHistory({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getQuotaHistory'] },
		}),
		...descriptionListZone({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listZone'] },
		}),
		...descriptionGetZone({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getZone'] },
		}),
		...descriptionTerminateZone({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['terminateZone'] },
		}),
		...descriptionCancelTerminationZone({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['cancelTerminationZone'] },
		}),
		...descriptionListSsl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listSsl'] },
		}),
		...descriptionCreateSsl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createSsl'] },
		}),
		...descriptionGetSsl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getSsl'] },
		}),
		...descriptionDeleteSsl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteSsl'] },
		}),
		...descriptionUpdateSsl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateSsl'] },
		}),
		...descriptionListHttpFarms({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listHttpFarms'] },
		}),
		...descriptionCreateHttpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createHttpFarm'] },
		}),
		...descriptionGetHttpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getHttpFarm'] },
		}),
		...descriptionUpdateHttpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateHttpFarm'] },
		}),
		...descriptionDeleteHttpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteHttpFarm'] },
		}),
		...descriptionListHttpFarmServers({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listHttpFarmServers'] },
		}),
		...descriptionCreateHttpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createHttpFarmServer'] },
		}),
		...descriptionGetHttpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getHttpFarmServer'] },
		}),
		...descriptionDeleteHttpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteHttpFarmServer'] },
		}),
		...descriptionUpdateHttpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateHttpFarmServer'] },
		}),
		...descriptionListHttpFrontends({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listHttpFrontends'] },
		}),
		...descriptionCreateHttpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createHttpFrontend'] },
		}),
		...descriptionGetHttpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getHttpFrontend'] },
		}),
		...descriptionDeleteHttpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteHttpFrontend'] },
		}),
		...descriptionUpdateHttpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateHttpFrontend'] },
		}),
		...descriptionListHttpRoutes({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listHttpRoutes'] },
		}),
		...descriptionCreateHttpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createHttpRoute'] },
		}),
		...descriptionGetHttpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getHttpRoute'] },
		}),
		...descriptionDeleteHttpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteHttpRoute'] },
		}),
		...descriptionUpdateHttpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateHttpRoute'] },
		}),
		...descriptionListHttpRouteRules({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listHttpRouteRules'] },
		}),
		...descriptionCreateHttpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createHttpRouteRule'] },
		}),
		...descriptionGetHttpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getHttpRouteRule'] },
		}),
		...descriptionDeleteHttpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteHttpRouteRule'] },
		}),
		...descriptionUpdateHttpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateHttpRouteRule'] },
		}),
		...descriptionListTcpFarms({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTcpFarms'] },
		}),
		...descriptionCreateTcpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createTcpFarm'] },
		}),
		...descriptionGetTcpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTcpFarm'] },
		}),
		...descriptionDeleteTcpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteTcpFarm'] },
		}),
		...descriptionUpdateTcpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateTcpFarm'] },
		}),
		...descriptionListTcpFarmServers({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTcpFarmServers'] },
		}),
		...descriptionCreateTcpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createTcpFarmServer'] },
		}),
		...descriptionGetTcpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTcpFarmServer'] },
		}),
		...descriptionDeleteTcpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteTcpFarmServer'] },
		}),
		...descriptionUpdateTcpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateTcpFarmServer'] },
		}),
		...descriptionListTcpFrontends({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTcpFrontends'] },
		}),
		...descriptionCreateTcpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createTcpFrontend'] },
		}),
		...descriptionGetTcpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTcpFrontend'] },
		}),
		...descriptionDeleteTcpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteTcpFrontend'] },
		}),
		...descriptionUpdateTcpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateTcpFrontend'] },
		}),
		...descriptionListTcpRoutes({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTcpRoutes'] },
		}),
		...descriptionCreateTcpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createTcpRoute'] },
		}),
		...descriptionGetTcpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTcpRoute'] },
		}),
		...descriptionDeleteTcpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteTcpRoute'] },
		}),
		...descriptionUpdateTcpRoute({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateTcpRoute'] },
		}),
		...descriptionListTcpRouteRules({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTcpRouteRules'] },
		}),
		...descriptionCreateTcpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createTcpRouteRule'] },
		}),
		...descriptionGetTcpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTcpRouteRule'] },
		}),
		...descriptionDeleteTcpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteTcpRouteRule'] },
		}),
		...descriptionUpdateTcpRouteRule({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateTcpRouteRule'] },
		}),
		...descriptionListUdpFarms({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listUdpFarms'] },
		}),
		...descriptionCreateUdpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createUdpFarm'] },
		}),
		...descriptionGetUdpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getUdpFarm'] },
		}),
		...descriptionDeleteUdpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteUdpFarm'] },
		}),
		...descriptionUpdateUdpFarm({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateUdpFarm'] },
		}),
		...descriptionListUdpFarmServers({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listUdpFarmServers'] },
		}),
		...descriptionCreateUdpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createUdpFarmServer'] },
		}),
		...descriptionGetUdpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getUdpFarmServer'] },
		}),
		...descriptionDeleteUdpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteUdpFarmServer'] },
		}),
		...descriptionUpdateUdpFarmServer({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateUdpFarmServer'] },
		}),
		...descriptionListUdpFrontends({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listUdpFrontends'] },
		}),
		...descriptionCreateUdpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createUdpFrontend'] },
		}),
		...descriptionGetUdpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getUdpFrontend'] },
		}),
		...descriptionDeleteUdpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteUdpFrontend'] },
		}),
		...descriptionUpdateUdpFrontend({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateUdpFrontend'] },
		}),
		...descriptionListVrackNetworks({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listVrackNetworks'] },
		}),
		...descriptionCreateVrackNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createVrackNetwork'] },
		}),
		...descriptionGetVrackNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getVrackNetwork'] },
		}),
		...descriptionDeleteVrackNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteVrackNetwork'] },
		}),
		...descriptionUpdateVrackNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['updateVrackNetwork'] },
		}),
		...descriptionUpdateVrackNetworkFarmId({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['updateVrackNetworkFarmId'],
			},
		}),
		...descriptionVrackStatus({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['vrackStatus'] },
		}),
		...descriptionVrackNetworkCreationRules({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['vrackNetworkCreationRules'],
			},
		}),
		...descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listTasks'] },
		}),
		...descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getTask'] },
		}),
		...descriptionListLogSubscriptions({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listLogSubscriptions'] },
		}),
		...descriptionCreateLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['createLogSubscription'] },
		}),
		...descriptionGetLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getLogSubscription'] },
		}),
		...descriptionDeleteLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['deleteLogSubscription'] },
		}),
		...descriptionListLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listLogKind'] },
		}),
		...descriptionGetLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['getLogKind'] },
		}),
		...descriptionGenerateLogUrl({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['generateLogUrl'] },
		}),
		...descriptionFreeCertificate({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['freeCertificate'] },
		}),
		...descriptionListDefinedFarms({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listDefinedFarms'] },
		}),
		...descriptionListDefinedFrontends({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listDefinedFrontends'] },
		}),
		...descriptionListDefinedRoutes({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listDefinedRoutes'] },
		}),
		...descriptionListAvailableFarmProbes({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['listAvailableFarmProbes'],
			},
		}),
		...descriptionListAvailableFarmType({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['listAvailableFarmType'] },
		}),
		...descriptionListAvailableFrontendType({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['listAvailableFrontendType'],
			},
		}),
		...descriptionListAvailableRouteActions({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['listAvailableRouteActions'],
			},
		}),
		...descriptionListAvailableRouteRules({
			...displayOptions,
			show: {
				...displayOptions?.show,
				ipLoadbalancingOperation: ['listAvailableRouteRules'],
			},
		}),
	];
}

/**
 * Executes the selected IP Load Balancing operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipLoadbalancingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'refresh':
			return await executeRefresh.call(this);
		case 'status':
			return await executeStatus.call(this);
		case 'listFailover':
			return await executeListFailover.call(this);
		case 'instancesState':
			return await executeInstancesState.call(this);
		case 'metricsToken':
			return await executeMetricsToken.call(this);
		case 'listNatIp':
			return await executeListNatIp.call(this);
		case 'listPendingChanges':
			return await executeListPendingChanges.call(this);
		case 'listQuota':
			return await executeListQuota.call(this);
		case 'getQuota':
			return await executeGetQuota.call(this);
		case 'updateQuota':
			return await executeUpdateQuota.call(this);
		case 'listQuotaHistory':
			return await executeListQuotaHistory.call(this);
		case 'getQuotaHistory':
			return await executeGetQuotaHistory.call(this);
		case 'listZone':
			return await executeListZone.call(this);
		case 'getZone':
			return await executeGetZone.call(this);
		case 'terminateZone':
			return await executeTerminateZone.call(this);
		case 'cancelTerminationZone':
			return await executeCancelTerminationZone.call(this);
		case 'listSsl':
			return await executeListSsl.call(this);
		case 'createSsl':
			return await executeCreateSsl.call(this);
		case 'getSsl':
			return await executeGetSsl.call(this);
		case 'deleteSsl':
			return await executeDeleteSsl.call(this);
		case 'updateSsl':
			return await executeUpdateSsl.call(this);
		case 'listHttpFarms':
			return await executeListHttpFarms.call(this);
		case 'createHttpFarm':
			return await executeCreateHttpFarm.call(this);
		case 'getHttpFarm':
			return await executeGetHttpFarm.call(this);
		case 'updateHttpFarm':
			return await executeUpdateHttpFarm.call(this);
		case 'deleteHttpFarm':
			return await executeDeleteHttpFarm.call(this);
		case 'listHttpFarmServers':
			return await executeListHttpFarmServers.call(this);
		case 'createHttpFarmServer':
			return await executeCreateHttpFarmServer.call(this);
		case 'getHttpFarmServer':
			return await executeGetHttpFarmServer.call(this);
		case 'deleteHttpFarmServer':
			return await executeDeleteHttpFarmServer.call(this);
		case 'updateHttpFarmServer':
			return await executeUpdateHttpFarmServer.call(this);
		case 'listHttpFrontends':
			return await executeListHttpFrontends.call(this);
		case 'createHttpFrontend':
			return await executeCreateHttpFrontend.call(this);
		case 'getHttpFrontend':
			return await executeGetHttpFrontend.call(this);
		case 'deleteHttpFrontend':
			return await executeDeleteHttpFrontend.call(this);
		case 'updateHttpFrontend':
			return await executeUpdateHttpFrontend.call(this);
		case 'listHttpRoutes':
			return await executeListHttpRoutes.call(this);
		case 'createHttpRoute':
			return await executeCreateHttpRoute.call(this);
		case 'getHttpRoute':
			return await executeGetHttpRoute.call(this);
		case 'deleteHttpRoute':
			return await executeDeleteHttpRoute.call(this);
		case 'updateHttpRoute':
			return await executeUpdateHttpRoute.call(this);
		case 'listHttpRouteRules':
			return await executeListHttpRouteRules.call(this);
		case 'createHttpRouteRule':
			return await executeCreateHttpRouteRule.call(this);
		case 'getHttpRouteRule':
			return await executeGetHttpRouteRule.call(this);
		case 'deleteHttpRouteRule':
			return await executeDeleteHttpRouteRule.call(this);
		case 'updateHttpRouteRule':
			return await executeUpdateHttpRouteRule.call(this);
		case 'listTcpFarms':
			return await executeListTcpFarms.call(this);
		case 'createTcpFarm':
			return await executeCreateTcpFarm.call(this);
		case 'getTcpFarm':
			return await executeGetTcpFarm.call(this);
		case 'deleteTcpFarm':
			return await executeDeleteTcpFarm.call(this);
		case 'updateTcpFarm':
			return await executeUpdateTcpFarm.call(this);
		case 'listTcpFarmServers':
			return await executeListTcpFarmServers.call(this);
		case 'createTcpFarmServer':
			return await executeCreateTcpFarmServer.call(this);
		case 'getTcpFarmServer':
			return await executeGetTcpFarmServer.call(this);
		case 'deleteTcpFarmServer':
			return await executeDeleteTcpFarmServer.call(this);
		case 'updateTcpFarmServer':
			return await executeUpdateTcpFarmServer.call(this);
		case 'listTcpFrontends':
			return await executeListTcpFrontends.call(this);
		case 'createTcpFrontend':
			return await executeCreateTcpFrontend.call(this);
		case 'getTcpFrontend':
			return await executeGetTcpFrontend.call(this);
		case 'deleteTcpFrontend':
			return await executeDeleteTcpFrontend.call(this);
		case 'updateTcpFrontend':
			return await executeUpdateTcpFrontend.call(this);
		case 'listTcpRoutes':
			return await executeListTcpRoutes.call(this);
		case 'createTcpRoute':
			return await executeCreateTcpRoute.call(this);
		case 'getTcpRoute':
			return await executeGetTcpRoute.call(this);
		case 'deleteTcpRoute':
			return await executeDeleteTcpRoute.call(this);
		case 'updateTcpRoute':
			return await executeUpdateTcpRoute.call(this);
		case 'listTcpRouteRules':
			return await executeListTcpRouteRules.call(this);
		case 'createTcpRouteRule':
			return await executeCreateTcpRouteRule.call(this);
		case 'getTcpRouteRule':
			return await executeGetTcpRouteRule.call(this);
		case 'deleteTcpRouteRule':
			return await executeDeleteTcpRouteRule.call(this);
		case 'updateTcpRouteRule':
			return await executeUpdateTcpRouteRule.call(this);
		case 'listUdpFarms':
			return await executeListUdpFarms.call(this);
		case 'createUdpFarm':
			return await executeCreateUdpFarm.call(this);
		case 'getUdpFarm':
			return await executeGetUdpFarm.call(this);
		case 'deleteUdpFarm':
			return await executeDeleteUdpFarm.call(this);
		case 'updateUdpFarm':
			return await executeUpdateUdpFarm.call(this);
		case 'listUdpFarmServers':
			return await executeListUdpFarmServers.call(this);
		case 'createUdpFarmServer':
			return await executeCreateUdpFarmServer.call(this);
		case 'getUdpFarmServer':
			return await executeGetUdpFarmServer.call(this);
		case 'deleteUdpFarmServer':
			return await executeDeleteUdpFarmServer.call(this);
		case 'updateUdpFarmServer':
			return await executeUpdateUdpFarmServer.call(this);
		case 'listUdpFrontends':
			return await executeListUdpFrontends.call(this);
		case 'createUdpFrontend':
			return await executeCreateUdpFrontend.call(this);
		case 'getUdpFrontend':
			return await executeGetUdpFrontend.call(this);
		case 'deleteUdpFrontend':
			return await executeDeleteUdpFrontend.call(this);
		case 'updateUdpFrontend':
			return await executeUpdateUdpFrontend.call(this);
		case 'listVrackNetworks':
			return await executeListVrackNetworks.call(this);
		case 'createVrackNetwork':
			return await executeCreateVrackNetwork.call(this);
		case 'getVrackNetwork':
			return await executeGetVrackNetwork.call(this);
		case 'deleteVrackNetwork':
			return await executeDeleteVrackNetwork.call(this);
		case 'updateVrackNetwork':
			return await executeUpdateVrackNetwork.call(this);
		case 'updateVrackNetworkFarmId':
			return await executeUpdateVrackNetworkFarmId.call(this);
		case 'vrackStatus':
			return await executeVrackStatus.call(this);
		case 'vrackNetworkCreationRules':
			return await executeVrackNetworkCreationRules.call(this);
		case 'listTasks':
			return await executeListTasks.call(this);
		case 'getTask':
			return await executeGetTask.call(this);
		case 'listLogSubscriptions':
			return await executeListLogSubscriptions.call(this);
		case 'createLogSubscription':
			return await executeCreateLogSubscription.call(this);
		case 'getLogSubscription':
			return await executeGetLogSubscription.call(this);
		case 'deleteLogSubscription':
			return await executeDeleteLogSubscription.call(this);
		case 'listLogKind':
			return await executeListLogKind.call(this);
		case 'getLogKind':
			return await executeGetLogKind.call(this);
		case 'generateLogUrl':
			return await executeGenerateLogUrl.call(this);
		case 'freeCertificate':
			return await executeFreeCertificate.call(this);
		case 'listDefinedFarms':
			return await executeListDefinedFarms.call(this);
		case 'listDefinedFrontends':
			return await executeListDefinedFrontends.call(this);
		case 'listDefinedRoutes':
			return await executeListDefinedRoutes.call(this);
		case 'listAvailableFarmProbes':
			return await executeListAvailableFarmProbes.call(this);
		case 'listAvailableFarmType':
			return await executeListAvailableFarmType.call(this);
		case 'listAvailableFrontendType':
			return await executeListAvailableFrontendType.call(this);
		case 'listAvailableRouteActions':
			return await executeListAvailableRouteActions.call(this);
		case 'listAvailableRouteRules':
			return await executeListAvailableRouteRules.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipLoadbalancing"`);
}
