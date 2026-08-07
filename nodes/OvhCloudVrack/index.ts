import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDeleteVrackserviceNCloudProjectprojectDelete,
	description as descriptionDeleteVrackserviceNCloudProjectprojectDelete,
} from './deleteVrackserviceNCloudProjectprojectDelete.operation';
import {
	execute as executeDeleteVrackserviceNDedicatedClouddedicateDelete,
	description as descriptionDeleteVrackserviceNDedicatedClouddedicateDelete,
} from './deleteVrackserviceNDedicatedClouddedicateDelete.operation';
import {
	execute as executeDeleteVrackserviceNDedicatedServerdedicateDelete,
	description as descriptionDeleteVrackserviceNDedicatedServerdedicateDelete,
} from './deleteVrackserviceNDedicatedServerdedicateDelete.operation';
import {
	execute as executeDeleteVrackserviceNDedicatedServerInterfacededicateDelete,
	description as descriptionDeleteVrackserviceNDedicatedServerInterfacededicateDelete,
} from './deleteVrackserviceNDedicatedServerInterfacededicateDelete.operation';
import {
	execute as executeDeleteVrackserviceNIpipDelete,
	description as descriptionDeleteVrackserviceNIpipDelete,
} from './deleteVrackserviceNIpipDelete.operation';
import {
	execute as executeDeleteVrackserviceNIpLoadbalancingipLoadbaDelete,
	description as descriptionDeleteVrackserviceNIpLoadbalancingipLoadbaDelete,
} from './deleteVrackserviceNIpLoadbalancingipLoadbaDelete.operation';
import {
	execute as executeDeleteVrackserviceNIpv6ipv6Delete,
	description as descriptionDeleteVrackserviceNIpv6ipv6Delete,
} from './deleteVrackserviceNIpv6ipv6Delete.operation';
import {
	execute as executeDeleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete,
	description as descriptionDeleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete,
} from './deleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete.operation';
import {
	execute as executeDeleteVrackserviceNLegacyVracklegacyVrDelete,
	description as descriptionDeleteVrackserviceNLegacyVracklegacyVrDelete,
} from './deleteVrackserviceNLegacyVracklegacyVrDelete.operation';
import {
	execute as executeDeleteVrackserviceNOvhCloudConnectovhCloudDelete,
	description as descriptionDeleteVrackserviceNOvhCloudConnectovhCloudDelete,
} from './deleteVrackserviceNOvhCloudConnectovhCloudDelete.operation';
import {
	execute as executeDeleteVrackserviceNVrackServicesvrackSerDelete,
	description as descriptionDeleteVrackserviceNVrackServicesvrackSerDelete,
} from './deleteVrackserviceNVrackServicesvrackSerDelete.operation';
import {
	execute as executeGetVrackPublicRoutingRegionGet,
	description as descriptionGetVrackPublicRoutingRegionGet,
} from './getVrackPublicRoutingRegionGet.operation';
import {
	execute as executeGetVrackserviceNAllowedServicesGet,
	description as descriptionGetVrackserviceNAllowedServicesGet,
} from './getVrackserviceNAllowedServicesGet.operation';
import {
	execute as executeGetVrackserviceNCloudProjectGet,
	description as descriptionGetVrackserviceNCloudProjectGet,
} from './getVrackserviceNCloudProjectGet.operation';
import {
	execute as executeGetVrackserviceNCloudProjectprojectGet,
	description as descriptionGetVrackserviceNCloudProjectprojectGet,
} from './getVrackserviceNCloudProjectprojectGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet,
	description as descriptionGetVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet,
} from './getVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedCloudDatacenterdatacentGet,
	description as descriptionGetVrackserviceNDedicatedCloudDatacenterdatacentGet,
} from './getVrackserviceNDedicatedCloudDatacenterdatacentGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedCloudDatacenterGet,
	description as descriptionGetVrackserviceNDedicatedCloudDatacenterGet,
} from './getVrackserviceNDedicatedCloudDatacenterGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedClouddedicateGet,
	description as descriptionGetVrackserviceNDedicatedClouddedicateGet,
} from './getVrackserviceNDedicatedClouddedicateGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedCloudGet,
	description as descriptionGetVrackserviceNDedicatedCloudGet,
} from './getVrackserviceNDedicatedCloudGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedConnectGet,
	description as descriptionGetVrackserviceNDedicatedConnectGet,
} from './getVrackserviceNDedicatedConnectGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedConnectnameGet,
	description as descriptionGetVrackserviceNDedicatedConnectnameGet,
} from './getVrackserviceNDedicatedConnectnameGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerdedicateGet,
	description as descriptionGetVrackserviceNDedicatedServerdedicateGet,
} from './getVrackserviceNDedicatedServerdedicateGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerdedicateMrtgGet,
	description as descriptionGetVrackserviceNDedicatedServerdedicateMrtgGet,
} from './getVrackserviceNDedicatedServerdedicateMrtgGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerGet,
	description as descriptionGetVrackserviceNDedicatedServerGet,
} from './getVrackserviceNDedicatedServerGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerInterfacededicateGet,
	description as descriptionGetVrackserviceNDedicatedServerInterfacededicateGet,
} from './getVrackserviceNDedicatedServerInterfacededicateGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerInterfaceDetailsGet,
	description as descriptionGetVrackserviceNDedicatedServerInterfaceDetailsGet,
} from './getVrackserviceNDedicatedServerInterfaceDetailsGet.operation';
import {
	execute as executeGetVrackserviceNDedicatedServerInterfaceGet,
	description as descriptionGetVrackserviceNDedicatedServerInterfaceGet,
} from './getVrackserviceNDedicatedServerInterfaceGet.operation';
import {
	execute as executeGetVrackserviceNEligibleServicesGet,
	description as descriptionGetVrackserviceNEligibleServicesGet,
} from './getVrackserviceNEligibleServicesGet.operation';
import {
	execute as executeGetVrackserviceNIpipGet,
	description as descriptionGetVrackserviceNIpipGet,
} from './getVrackserviceNIpipGet.operation';
import {
	execute as executeGetVrackserviceNIpLoadbalancingGet,
	description as descriptionGetVrackserviceNIpLoadbalancingGet,
} from './getVrackserviceNIpLoadbalancingGet.operation';
import {
	execute as executeGetVrackserviceNIpLoadbalancingipLoadbaGet,
	description as descriptionGetVrackserviceNIpLoadbalancingipLoadbaGet,
} from './getVrackserviceNIpLoadbalancingipLoadbaGet.operation';
import {
	execute as executeGetVrackserviceNIpv6Get,
	description as descriptionGetVrackserviceNIpv6Get,
} from './getVrackserviceNIpv6Get.operation';
import {
	execute as executeGetVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet,
	description as descriptionGetVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet,
} from './getVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet.operation';
import {
	execute as executeGetVrackserviceNIpv6ipv6BridgedSubrangeGet,
	description as descriptionGetVrackserviceNIpv6ipv6BridgedSubrangeGet,
} from './getVrackserviceNIpv6ipv6BridgedSubrangeGet.operation';
import {
	execute as executeGetVrackserviceNIpv6ipv6Get,
	description as descriptionGetVrackserviceNIpv6ipv6Get,
} from './getVrackserviceNIpv6ipv6Get.operation';
import {
	execute as executeGetVrackserviceNIpv6ipv6RoutedSubrangeGet,
	description as descriptionGetVrackserviceNIpv6ipv6RoutedSubrangeGet,
} from './getVrackserviceNIpv6ipv6RoutedSubrangeGet.operation';
import {
	execute as executeGetVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet,
	description as descriptionGetVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet,
} from './getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet.operation';
import {
	execute as executeGetVrackserviceNLegacyVrackGet,
	description as descriptionGetVrackserviceNLegacyVrackGet,
} from './getVrackserviceNLegacyVrackGet.operation';
import {
	execute as executeGetVrackserviceNLegacyVracklegacyVrGet,
	description as descriptionGetVrackserviceNLegacyVracklegacyVrGet,
} from './getVrackserviceNLegacyVracklegacyVrGet.operation';
import {
	execute as executeGetVrackserviceNOvhCloudConnectGet,
	description as descriptionGetVrackserviceNOvhCloudConnectGet,
} from './getVrackserviceNOvhCloudConnectGet.operation';
import {
	execute as executeGetVrackserviceNOvhCloudConnectovhCloudGet,
	description as descriptionGetVrackserviceNOvhCloudConnectovhCloudGet,
} from './getVrackserviceNOvhCloudConnectovhCloudGet.operation';
import {
	execute as executeGetVrackserviceNPublicRoutingBandwidthLimitGet,
	description as descriptionGetVrackserviceNPublicRoutingBandwidthLimitGet,
} from './getVrackserviceNPublicRoutingBandwidthLimitGet.operation';
import {
	execute as executeGetVrackserviceNServiceInfosGet,
	description as descriptionGetVrackserviceNServiceInfosGet,
} from './getVrackserviceNServiceInfosGet.operation';
import {
	execute as executeGetVrackserviceNTaskGet,
	description as descriptionGetVrackserviceNTaskGet,
} from './getVrackserviceNTaskGet.operation';
import {
	execute as executeGetVrackserviceNTasktaskIdGet,
	description as descriptionGetVrackserviceNTasktaskIdGet,
} from './getVrackserviceNTasktaskIdGet.operation';
import {
	execute as executeGetVrackserviceNVrackServicesGet,
	description as descriptionGetVrackserviceNVrackServicesGet,
} from './getVrackserviceNVrackServicesGet.operation';
import {
	execute as executeGetVrackserviceNVrackServicesvrackSerGet,
	description as descriptionGetVrackserviceNVrackServicesvrackSerGet,
} from './getVrackserviceNVrackServicesvrackSerGet.operation';
import {
	execute as executePostVrackserviceNCloudProjectPost,
	description as descriptionPostVrackserviceNCloudProjectPost,
} from './postVrackserviceNCloudProjectPost.operation';
import {
	execute as executePostVrackserviceNConfirmTerminationPost,
	description as descriptionPostVrackserviceNConfirmTerminationPost,
} from './postVrackserviceNConfirmTerminationPost.operation';
import {
	execute as executePostVrackserviceNDedicatedCloudDatacenterdatacentMovePost,
	description as descriptionPostVrackserviceNDedicatedCloudDatacenterdatacentMovePost,
} from './postVrackserviceNDedicatedCloudDatacenterdatacentMovePost.operation';
import {
	execute as executePostVrackserviceNDedicatedCloudPost,
	description as descriptionPostVrackserviceNDedicatedCloudPost,
} from './postVrackserviceNDedicatedCloudPost.operation';
import {
	execute as executePostVrackserviceNDedicatedServerInterfacePost,
	description as descriptionPostVrackserviceNDedicatedServerInterfacePost,
} from './postVrackserviceNDedicatedServerInterfacePost.operation';
import {
	execute as executePostVrackserviceNDedicatedServerPost,
	description as descriptionPostVrackserviceNDedicatedServerPost,
} from './postVrackserviceNDedicatedServerPost.operation';
import {
	execute as executePostVrackserviceNIpLoadbalancingPost,
	description as descriptionPostVrackserviceNIpLoadbalancingPost,
} from './postVrackserviceNIpLoadbalancingPost.operation';
import {
	execute as executePostVrackserviceNIpv6ipv6RoutedSubrangePost,
	description as descriptionPostVrackserviceNIpv6ipv6RoutedSubrangePost,
} from './postVrackserviceNIpv6ipv6RoutedSubrangePost.operation';
import {
	execute as executePostVrackserviceNIpv6Post,
	description as descriptionPostVrackserviceNIpv6Post,
} from './postVrackserviceNIpv6Post.operation';
import {
	execute as executePostVrackserviceNLegacyVrackPost,
	description as descriptionPostVrackserviceNLegacyVrackPost,
} from './postVrackserviceNLegacyVrackPost.operation';
import {
	execute as executePostVrackserviceNOvhCloudConnectPost,
	description as descriptionPostVrackserviceNOvhCloudConnectPost,
} from './postVrackserviceNOvhCloudConnectPost.operation';
import {
	execute as executePostVrackserviceNTerminatePost,
	description as descriptionPostVrackserviceNTerminatePost,
} from './postVrackserviceNTerminatePost.operation';
import {
	execute as executePostVrackserviceNVrackServicesPost,
	description as descriptionPostVrackserviceNVrackServicesPost,
} from './postVrackserviceNVrackServicesPost.operation';
import {
	execute as executePutVrackserviceNDedicatedConnectnamePut,
	description as descriptionPutVrackserviceNDedicatedConnectnamePut,
} from './putVrackserviceNDedicatedConnectnamePut.operation';
import {
	execute as executePutVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut,
	description as descriptionPutVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut,
} from './putVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vrackOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Delete Vrack ServiceName CloudProject Project',
					value: 'deleteVrackserviceNCloudProjectprojectDelete',
					action: 'remove this publicCloud project from this vrack',
				},
				{
					name: 'Delete Vrack ServiceName DedicatedCloud DedicatedCloud',
					value: 'deleteVrackserviceNDedicatedClouddedicateDelete',
					action: 'Remove VMware on OVHcloud from vRack',
				},
				{
					name: 'Delete Vrack ServiceName DedicatedServer DedicatedServer',
					value: 'deleteVrackserviceNDedicatedServerdedicateDelete',
					action: 'remove this server from this vrack (LEGACY)',
				},
				{
					name: 'Delete Vrack ServiceName DedicatedServerInterface DedicatedServerInterface',
					value: 'deleteVrackserviceNDedicatedServerInterfacededicateDelete',
					action: 'remove this server interface from this vrack',
				},
				{
					name: 'Delete Vrack ServiceName Ip Ip',
					value: 'deleteVrackserviceNIpipDelete',
					action: 'remove this IP block from this vrack',
				},
				{
					name: 'Delete Vrack ServiceName IpLoadbalancing IpLoadbalancing',
					value: 'deleteVrackserviceNIpLoadbalancingipLoadbaDelete',
					action: 'remove this ipLoadbalancing from this vrack',
				},
				{
					name: 'Delete Vrack ServiceName Ipv6 Ipv6',
					value: 'deleteVrackserviceNIpv6ipv6Delete',
					action: 'remove this IP v6 block from this vrack',
				},
				{
					name: 'Delete Vrack ServiceName Ipv6 Ipv6 RoutedSubrange RoutedSubrange',
					value: 'deleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete',
					action: 'unroute subrange from your vrack',
				},
				{
					name: 'Delete Vrack ServiceName LegacyVrack LegacyVrack',
					value: 'deleteVrackserviceNLegacyVracklegacyVrDelete',
					action: 'remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)',
				},
				{
					name: 'Delete Vrack ServiceName OvhCloudConnect OvhCloudConnect',
					value: 'deleteVrackserviceNOvhCloudConnectovhCloudDelete',
					action: 'Remove the ovhCloudConnect from the vrack',
				},
				{
					name: 'Delete Vrack ServiceName VrackServices VrackServices',
					value: 'deleteVrackserviceNVrackServicesvrackSerDelete',
					action: 'Remove the vrackServices from the vrack',
				},
				{
					name: 'Get Vrack PublicRoutingRegion',
					value: 'getVrackPublicRoutingRegionGet',
					action: 'List Regions available to announce IP blocks',
				},
				{
					name: 'Get Vrack ServiceName AllowedServices',
					value: 'getVrackserviceNAllowedServicesGet',
					action: 'List all services allowed in this vrack',
				},
				{
					name: 'Get Vrack ServiceName CloudProject',
					value: 'getVrackserviceNCloudProjectGet',
					action: 'vrack for publicCloud project',
				},
				{
					name: 'Get Vrack ServiceName CloudProject Project',
					value: 'getVrackserviceNCloudProjectprojectGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName DedicatedCloudDatacenter Datacenter AllowedVrack',
					value: 'getVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet',
					action: 'Vracks allowed for your dedicatedCloud datacenter',
				},
				{
					name: 'Get Vrack ServiceName DedicatedCloudDatacenter Datacenter',
					value: 'getVrackserviceNDedicatedCloudDatacenterdatacentGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName DedicatedCloudDatacenter',
					value: 'getVrackserviceNDedicatedCloudDatacenterGet',
					action: 'vrack dedicated cloud datacenter',
				},
				{
					name: 'Get Vrack ServiceName DedicatedCloud DedicatedCloud',
					value: 'getVrackserviceNDedicatedClouddedicateGet',
					action: 'Get vRack',
				},
				{
					name: 'Get Vrack ServiceName DedicatedCloud',
					value: 'getVrackserviceNDedicatedCloudGet',
					action: 'vrack dedicated cloud (VmNetwork)',
				},
				{
					name: 'Get Vrack ServiceName DedicatedConnect',
					value: 'getVrackserviceNDedicatedConnectGet',
					action: 'vrack dedicated connect',
				},
				{
					name: 'Get Vrack ServiceName DedicatedConnect Name',
					value: 'getVrackserviceNDedicatedConnectnameGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServer DedicatedServer',
					value: 'getVrackserviceNDedicatedServerdedicateGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServer DedicatedServer Mrtg',
					value: 'getVrackserviceNDedicatedServerdedicateMrtgGet',
					action: 'Retrieve vrack traffic graph values (LEGACY)',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServer',
					value: 'getVrackserviceNDedicatedServerGet',
					action: 'vrack for dedicated server',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServerInterface DedicatedServerInterface',
					value: 'getVrackserviceNDedicatedServerInterfacededicateGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServerInterfaceDetails',
					value: 'getVrackserviceNDedicatedServerInterfaceDetailsGet',
					action: 'Details for all dedicated server interfaces in this vrack',
				},
				{
					name: 'Get Vrack ServiceName DedicatedServerInterface',
					value: 'getVrackserviceNDedicatedServerInterfaceGet',
					action: 'vrack for dedicated server interface',
				},
				{
					name: 'Get Vrack ServiceName EligibleServices',
					value: 'getVrackserviceNEligibleServicesGet',
					action: 'List all eligible services for this vRack asynchronously',
				},
				{
					name: 'Get Vrack ServiceName Ip Ip',
					value: 'getVrackserviceNIpipGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName IpLoadbalancing',
					value: 'getVrackserviceNIpLoadbalancingGet',
					action: 'vrack for ipLoadbalancing',
				},
				{
					name: 'Get Vrack ServiceName IpLoadbalancing IpLoadbalancing',
					value: 'getVrackserviceNIpLoadbalancingipLoadbaGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName Ipv6',
					value: 'getVrackserviceNIpv6Get',
					action: 'vrack for IP v6 blocks',
				},
				{
					name: 'Get Vrack ServiceName Ipv6 Ipv6 BridgedSubrange BridgedSubrange',
					value: 'getVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName Ipv6 Ipv6 BridgedSubrange',
					value: 'getVrackserviceNIpv6ipv6BridgedSubrangeGet',
					action: 'subrange bridged into your vrack',
				},
				{
					name: 'Get Vrack ServiceName Ipv6 Ipv6',
					value: 'getVrackserviceNIpv6ipv6Get',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName Ipv6 Ipv6 RoutedSubrange',
					value: 'getVrackserviceNIpv6ipv6RoutedSubrangeGet',
					action: 'subrange routed into your vrack',
				},
				{
					name: 'Get Vrack ServiceName Ipv6 Ipv6 RoutedSubrange RoutedSubrange',
					value: 'getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName LegacyVrack',
					value: 'getVrackserviceNLegacyVrackGet',
					action: 'vrack for legacy vrack',
				},
				{
					name: 'Get Vrack ServiceName LegacyVrack LegacyVrack',
					value: 'getVrackserviceNLegacyVracklegacyVrGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName OvhCloudConnect',
					value: 'getVrackserviceNOvhCloudConnectGet',
					action: 'vrack for ovhCloudConnect',
				},
				{
					name: 'Get Vrack ServiceName OvhCloudConnect OvhCloudConnect',
					value: 'getVrackserviceNOvhCloudConnectovhCloudGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName PublicRoutingBandwidthLimit',
					value: 'getVrackserviceNPublicRoutingBandwidthLimitGet',
					action: 'List public routing bandwidth limit on regions for this vrack',
				},
				{
					name: 'Get Vrack ServiceName ServiceInfos',
					value: 'getVrackserviceNServiceInfosGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName Task',
					value: 'getVrackserviceNTaskGet',
					action: 'vrack tasks',
				},
				{
					name: 'Get Vrack ServiceName Task TaskId',
					value: 'getVrackserviceNTasktaskIdGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get Vrack ServiceName VrackServices',
					value: 'getVrackserviceNVrackServicesGet',
					action: 'vrack for vrackServices',
				},
				{
					name: 'Get Vrack ServiceName VrackServices VrackServices',
					value: 'getVrackserviceNVrackServicesvrackSerGet',
					action: 'Get this object properties',
				},
				{
					name: 'Create Vrack ServiceName CloudProject',
					value: 'postVrackserviceNCloudProjectPost',
					action: 'add a publicCloud project to this vrack',
				},
				{
					name: 'Create Vrack ServiceName ConfirmTermination',
					value: 'postVrackserviceNConfirmTerminationPost',
					action: 'Confirm service termination',
				},
				{
					name: 'Create Vrack ServiceName DedicatedCloudDatacenter Datacenter Move',
					value: 'postVrackserviceNDedicatedCloudDatacenterdatacentMovePost',
					action: 'Move your dedicatedCloud datacenter from a Vrack to another',
				},
				{
					name: 'Create Vrack ServiceName DedicatedCloud',
					value: 'postVrackserviceNDedicatedCloudPost',
					action: 'Add VMware on OVHcloud to vRack',
				},
				{
					name: 'Create Vrack ServiceName DedicatedServerInterface',
					value: 'postVrackserviceNDedicatedServerInterfacePost',
					action: 'add a dedicated server interface to this vrack',
				},
				{
					name: 'Create Vrack ServiceName DedicatedServer',
					value: 'postVrackserviceNDedicatedServerPost',
					action: 'add a dedicated server to this vrack (LEGACY)',
				},
				{
					name: 'Create Vrack ServiceName IpLoadbalancing',
					value: 'postVrackserviceNIpLoadbalancingPost',
					action: 'add an ipLoadbalancing to this vrack',
				},
				{
					name: 'Create Vrack ServiceName Ipv6 Ipv6 RoutedSubrange',
					value: 'postVrackserviceNIpv6ipv6RoutedSubrangePost',
					action: 'route a subrange of your IP v6 block into your vrack',
				},
				{
					name: 'Create Vrack ServiceName Ipv6',
					value: 'postVrackserviceNIpv6Post',
					action: 'add an IP v6 block to this vrack',
				},
				{
					name: 'Create Vrack ServiceName LegacyVrack',
					value: 'postVrackserviceNLegacyVrackPost',
					action: 'add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)',
				},
				{
					name: 'Create Vrack ServiceName OvhCloudConnect',
					value: 'postVrackserviceNOvhCloudConnectPost',
					action: 'Add an ovhCloudConnect to the vrack',
				},
				{
					name: 'Create Vrack ServiceName Terminate',
					value: 'postVrackserviceNTerminatePost',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Create Vrack ServiceName VrackServices',
					value: 'postVrackserviceNVrackServicesPost',
					action: 'Add a vrackServices to the vrack',
				},
				{
					name: 'Update Vrack ServiceName DedicatedConnect Name',
					value: 'putVrackserviceNDedicatedConnectnamePut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update Vrack ServiceName Ipv6 Ipv6 BridgedSubrange BridgedSubrange',
					value: 'putVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut',
					action: 'Update Slaac status',
				},
			],
			default: 'deleteVrackserviceNCloudProjectprojectDelete',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionDeleteVrackserviceNCloudProjectprojectDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNCloudProjectprojectDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNDedicatedClouddedicateDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNDedicatedClouddedicateDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNDedicatedServerdedicateDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNDedicatedServerdedicateDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNDedicatedServerInterfacededicateDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNDedicatedServerInterfacededicateDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNIpipDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNIpipDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNIpLoadbalancingipLoadbaDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNIpLoadbalancingipLoadbaDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNIpv6ipv6Delete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNIpv6ipv6Delete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNLegacyVracklegacyVrDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNLegacyVracklegacyVrDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNOvhCloudConnectovhCloudDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNOvhCloudConnectovhCloudDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteVrackserviceNVrackServicesvrackSerDelete({
			...displayOptions,
			show: { vrackOperation: ['deleteVrackserviceNVrackServicesvrackSerDelete'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackPublicRoutingRegionGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackPublicRoutingRegionGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNAllowedServicesGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNAllowedServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNCloudProjectGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNCloudProjectGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNCloudProjectprojectGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNCloudProjectprojectGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedCloudDatacenterdatacentGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedCloudDatacenterdatacentGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedCloudDatacenterGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedCloudDatacenterGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedClouddedicateGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedClouddedicateGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedCloudGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedConnectGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedConnectGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedConnectnameGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedConnectnameGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerdedicateGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerdedicateGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerdedicateMrtgGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerdedicateMrtgGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerInterfacededicateGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerInterfacededicateGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerInterfaceDetailsGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerInterfaceDetailsGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNDedicatedServerInterfaceGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNDedicatedServerInterfaceGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNEligibleServicesGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNEligibleServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpipGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpipGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpLoadbalancingGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpLoadbalancingGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpLoadbalancingipLoadbaGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpLoadbalancingipLoadbaGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6Get({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6Get'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6ipv6BridgedSubrangeGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6ipv6BridgedSubrangeGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6ipv6Get({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6ipv6Get'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6ipv6RoutedSubrangeGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6ipv6RoutedSubrangeGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNLegacyVrackGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNLegacyVrackGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNLegacyVracklegacyVrGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNLegacyVracklegacyVrGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNOvhCloudConnectGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNOvhCloudConnectGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNOvhCloudConnectovhCloudGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNOvhCloudConnectovhCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNPublicRoutingBandwidthLimitGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNPublicRoutingBandwidthLimitGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNServiceInfosGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNTaskGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNTaskGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNTasktaskIdGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNTasktaskIdGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNVrackServicesGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNVrackServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionGetVrackserviceNVrackServicesvrackSerGet({
			...displayOptions,
			show: { vrackOperation: ['getVrackserviceNVrackServicesvrackSerGet'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNCloudProjectPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNCloudProjectPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNConfirmTerminationPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNConfirmTerminationPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNDedicatedCloudDatacenterdatacentMovePost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNDedicatedCloudDatacenterdatacentMovePost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNDedicatedCloudPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNDedicatedCloudPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNDedicatedServerInterfacePost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNDedicatedServerInterfacePost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNDedicatedServerPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNDedicatedServerPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNIpLoadbalancingPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNIpLoadbalancingPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNIpv6ipv6RoutedSubrangePost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNIpv6ipv6RoutedSubrangePost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNIpv6Post({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNIpv6Post'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNLegacyVrackPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNLegacyVrackPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNOvhCloudConnectPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNOvhCloudConnectPost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNTerminatePost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNTerminatePost'] },
		}) as INodeProperties[]),
		...(descriptionPostVrackserviceNVrackServicesPost({
			...displayOptions,
			show: { vrackOperation: ['postVrackserviceNVrackServicesPost'] },
		}) as INodeProperties[]),
		...(descriptionPutVrackserviceNDedicatedConnectnamePut({
			...displayOptions,
			show: { vrackOperation: ['putVrackserviceNDedicatedConnectnamePut'] },
		}) as INodeProperties[]),
		...(descriptionPutVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut({
			...displayOptions,
			show: { vrackOperation: ['putVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'deleteVrackserviceNCloudProjectprojectDelete':
			return await executeDeleteVrackserviceNCloudProjectprojectDelete.call(this, itemIndex);
		case 'deleteVrackserviceNDedicatedClouddedicateDelete':
			return await executeDeleteVrackserviceNDedicatedClouddedicateDelete.call(this, itemIndex);
		case 'deleteVrackserviceNDedicatedServerdedicateDelete':
			return await executeDeleteVrackserviceNDedicatedServerdedicateDelete.call(this, itemIndex);
		case 'deleteVrackserviceNDedicatedServerInterfacededicateDelete':
			return await executeDeleteVrackserviceNDedicatedServerInterfacededicateDelete.call(
				this,
				itemIndex,
			);
		case 'deleteVrackserviceNIpipDelete':
			return await executeDeleteVrackserviceNIpipDelete.call(this, itemIndex);
		case 'deleteVrackserviceNIpLoadbalancingipLoadbaDelete':
			return await executeDeleteVrackserviceNIpLoadbalancingipLoadbaDelete.call(this, itemIndex);
		case 'deleteVrackserviceNIpv6ipv6Delete':
			return await executeDeleteVrackserviceNIpv6ipv6Delete.call(this, itemIndex);
		case 'deleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete':
			return await executeDeleteVrackserviceNIpv6ipv6RoutedSubrangeroutedSuDelete.call(
				this,
				itemIndex,
			);
		case 'deleteVrackserviceNLegacyVracklegacyVrDelete':
			return await executeDeleteVrackserviceNLegacyVracklegacyVrDelete.call(this, itemIndex);
		case 'deleteVrackserviceNOvhCloudConnectovhCloudDelete':
			return await executeDeleteVrackserviceNOvhCloudConnectovhCloudDelete.call(this, itemIndex);
		case 'deleteVrackserviceNVrackServicesvrackSerDelete':
			return await executeDeleteVrackserviceNVrackServicesvrackSerDelete.call(this, itemIndex);
		case 'getVrackPublicRoutingRegionGet':
			return await executeGetVrackPublicRoutingRegionGet.call(this, itemIndex);
		case 'getVrackserviceNAllowedServicesGet':
			return await executeGetVrackserviceNAllowedServicesGet.call(this, itemIndex);
		case 'getVrackserviceNCloudProjectGet':
			return await executeGetVrackserviceNCloudProjectGet.call(this, itemIndex);
		case 'getVrackserviceNCloudProjectprojectGet':
			return await executeGetVrackserviceNCloudProjectprojectGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet':
			return await executeGetVrackserviceNDedicatedCloudDatacenterdatacentAllowedVrackGet.call(
				this,
				itemIndex,
			);
		case 'getVrackserviceNDedicatedCloudDatacenterdatacentGet':
			return await executeGetVrackserviceNDedicatedCloudDatacenterdatacentGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedCloudDatacenterGet':
			return await executeGetVrackserviceNDedicatedCloudDatacenterGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedClouddedicateGet':
			return await executeGetVrackserviceNDedicatedClouddedicateGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedCloudGet':
			return await executeGetVrackserviceNDedicatedCloudGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedConnectGet':
			return await executeGetVrackserviceNDedicatedConnectGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedConnectnameGet':
			return await executeGetVrackserviceNDedicatedConnectnameGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerdedicateGet':
			return await executeGetVrackserviceNDedicatedServerdedicateGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerdedicateMrtgGet':
			return await executeGetVrackserviceNDedicatedServerdedicateMrtgGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerGet':
			return await executeGetVrackserviceNDedicatedServerGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerInterfacededicateGet':
			return await executeGetVrackserviceNDedicatedServerInterfacededicateGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerInterfaceDetailsGet':
			return await executeGetVrackserviceNDedicatedServerInterfaceDetailsGet.call(this, itemIndex);
		case 'getVrackserviceNDedicatedServerInterfaceGet':
			return await executeGetVrackserviceNDedicatedServerInterfaceGet.call(this, itemIndex);
		case 'getVrackserviceNEligibleServicesGet':
			return await executeGetVrackserviceNEligibleServicesGet.call(this, itemIndex);
		case 'getVrackserviceNIpipGet':
			return await executeGetVrackserviceNIpipGet.call(this, itemIndex);
		case 'getVrackserviceNIpLoadbalancingGet':
			return await executeGetVrackserviceNIpLoadbalancingGet.call(this, itemIndex);
		case 'getVrackserviceNIpLoadbalancingipLoadbaGet':
			return await executeGetVrackserviceNIpLoadbalancingipLoadbaGet.call(this, itemIndex);
		case 'getVrackserviceNIpv6Get':
			return await executeGetVrackserviceNIpv6Get.call(this, itemIndex);
		case 'getVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet':
			return await executeGetVrackserviceNIpv6ipv6BridgedSubrangebridgedSGet.call(this, itemIndex);
		case 'getVrackserviceNIpv6ipv6BridgedSubrangeGet':
			return await executeGetVrackserviceNIpv6ipv6BridgedSubrangeGet.call(this, itemIndex);
		case 'getVrackserviceNIpv6ipv6Get':
			return await executeGetVrackserviceNIpv6ipv6Get.call(this, itemIndex);
		case 'getVrackserviceNIpv6ipv6RoutedSubrangeGet':
			return await executeGetVrackserviceNIpv6ipv6RoutedSubrangeGet.call(this, itemIndex);
		case 'getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet':
			return await executeGetVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet.call(this, itemIndex);
		case 'getVrackserviceNLegacyVrackGet':
			return await executeGetVrackserviceNLegacyVrackGet.call(this, itemIndex);
		case 'getVrackserviceNLegacyVracklegacyVrGet':
			return await executeGetVrackserviceNLegacyVracklegacyVrGet.call(this, itemIndex);
		case 'getVrackserviceNOvhCloudConnectGet':
			return await executeGetVrackserviceNOvhCloudConnectGet.call(this, itemIndex);
		case 'getVrackserviceNOvhCloudConnectovhCloudGet':
			return await executeGetVrackserviceNOvhCloudConnectovhCloudGet.call(this, itemIndex);
		case 'getVrackserviceNPublicRoutingBandwidthLimitGet':
			return await executeGetVrackserviceNPublicRoutingBandwidthLimitGet.call(this, itemIndex);
		case 'getVrackserviceNServiceInfosGet':
			return await executeGetVrackserviceNServiceInfosGet.call(this, itemIndex);
		case 'getVrackserviceNTaskGet':
			return await executeGetVrackserviceNTaskGet.call(this, itemIndex);
		case 'getVrackserviceNTasktaskIdGet':
			return await executeGetVrackserviceNTasktaskIdGet.call(this, itemIndex);
		case 'getVrackserviceNVrackServicesGet':
			return await executeGetVrackserviceNVrackServicesGet.call(this, itemIndex);
		case 'getVrackserviceNVrackServicesvrackSerGet':
			return await executeGetVrackserviceNVrackServicesvrackSerGet.call(this, itemIndex);
		case 'postVrackserviceNCloudProjectPost':
			return await executePostVrackserviceNCloudProjectPost.call(this, itemIndex);
		case 'postVrackserviceNConfirmTerminationPost':
			return await executePostVrackserviceNConfirmTerminationPost.call(this, itemIndex);
		case 'postVrackserviceNDedicatedCloudDatacenterdatacentMovePost':
			return await executePostVrackserviceNDedicatedCloudDatacenterdatacentMovePost.call(
				this,
				itemIndex,
			);
		case 'postVrackserviceNDedicatedCloudPost':
			return await executePostVrackserviceNDedicatedCloudPost.call(this, itemIndex);
		case 'postVrackserviceNDedicatedServerInterfacePost':
			return await executePostVrackserviceNDedicatedServerInterfacePost.call(this, itemIndex);
		case 'postVrackserviceNDedicatedServerPost':
			return await executePostVrackserviceNDedicatedServerPost.call(this, itemIndex);
		case 'postVrackserviceNIpLoadbalancingPost':
			return await executePostVrackserviceNIpLoadbalancingPost.call(this, itemIndex);
		case 'postVrackserviceNIpv6ipv6RoutedSubrangePost':
			return await executePostVrackserviceNIpv6ipv6RoutedSubrangePost.call(this, itemIndex);
		case 'postVrackserviceNIpv6Post':
			return await executePostVrackserviceNIpv6Post.call(this, itemIndex);
		case 'postVrackserviceNLegacyVrackPost':
			return await executePostVrackserviceNLegacyVrackPost.call(this, itemIndex);
		case 'postVrackserviceNOvhCloudConnectPost':
			return await executePostVrackserviceNOvhCloudConnectPost.call(this, itemIndex);
		case 'postVrackserviceNTerminatePost':
			return await executePostVrackserviceNTerminatePost.call(this, itemIndex);
		case 'postVrackserviceNVrackServicesPost':
			return await executePostVrackserviceNVrackServicesPost.call(this, itemIndex);
		case 'putVrackserviceNDedicatedConnectnamePut':
			return await executePutVrackserviceNDedicatedConnectnamePut.call(this, itemIndex);
		case 'putVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut':
			return await executePutVrackserviceNIpv6ipv6BridgedSubrangebridgedSPut.call(this, itemIndex);
	}

	throw new Error('Unsupported operation ' + operation);
}
