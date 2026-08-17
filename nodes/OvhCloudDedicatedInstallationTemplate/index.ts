import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionDedicatedInstallationtemplateGetGet,
	execute as executeDedicatedInstallationtemplateGetGet,
} from './DedicatedInstallationtemplateGet.operation';
import {
	description as descriptionDedicatedInstallationtemplateGetTemplatenameGet,
	execute as executeDedicatedInstallationtemplateGetTemplatenameGet,
} from './DedicatedInstallationtemplateGetTemplatename.operation';
import {
	description as descriptionDedicatedInstallationtemplatePartitionschemeGetGet,
	execute as executeDedicatedInstallationtemplatePartitionschemeGetGet,
} from './DedicatedInstallationtemplatePartitionschemeGet.operation';
import {
	description as descriptionDedicatedInstallationtemplateTemplateinfosGetGet,
	execute as executeDedicatedInstallationtemplateTemplateinfosGetGet,
} from './DedicatedInstallationtemplateTemplateinfosGet.operation';
import {
	description as descriptionInstallationtemplatePartitionschemeHardwareraidGetGet,
	execute as executeInstallationtemplatePartitionschemeHardwareraidGetGet,
} from './InstallationtemplatePartitionschemeHardwareraidGet.operation';
import {
	description as descriptionInstallationtemplatePartitionschemePartitionGetGet,
	execute as executeInstallationtemplatePartitionschemePartitionGetGet,
} from './InstallationtemplatePartitionschemePartitionGet.operation';


const { description, execute } = createOperationDispatcher(
	'dedicatedInstallationTemplateOperation',
	'dedicatedinstallationtemplate',
	[
	{
		name: 'Get Details About Available Distributions For Dedicated Servers',
		value: 'DedicatedInstallationtemplateTemplateinfosGet',
		action: 'Get details about available distributions for dedicated servers',
		execute: executeDedicatedInstallationtemplateTemplateinfosGetGet,
		description: descriptionDedicatedInstallationtemplateTemplateinfosGetGet,
		show: false,
		default: true,
	},
	{
		name: 'Get This Object Properties',
		value: 'DedicatedInstallationtemplateGetTemplatename',
		action: 'Get this object properties',
		execute: executeDedicatedInstallationtemplateGetTemplatenameGet,
		description: descriptionDedicatedInstallationtemplateGetTemplatenameGet,
		show: false,
	},
	{
		name: 'Hardware Raids Defined In This Partitioning Scheme',
		value: 'InstallationtemplatePartitionschemeHardwareraidGet',
		action: 'Hardware RAIDs defined in this partitioning scheme',
		execute: executeInstallationtemplatePartitionschemeHardwareraidGetGet,
		description: descriptionInstallationtemplatePartitionschemeHardwareraidGetGet,
		show: false,
	},
	{
		name: 'Ovh Operating System Installation Templates',
		value: 'DedicatedInstallationtemplateGet',
		action: 'OVH operating system installation templates',
		execute: executeDedicatedInstallationtemplateGetGet,
		description: descriptionDedicatedInstallationtemplateGetGet,
		show: false,
	},
	{
		name: 'Partitioning Schemes Available On This Template',
		value: 'DedicatedInstallationtemplatePartitionschemeGet',
		action: 'Partitioning schemes available on this template',
		execute: executeDedicatedInstallationtemplatePartitionschemeGetGet,
		description: descriptionDedicatedInstallationtemplatePartitionschemeGetGet,
		show: false,
	},
	{
		name: 'Partitions Defined In This Partitioning Scheme',
		value: 'InstallationtemplatePartitionschemePartitionGet',
		action: 'Partitions defined in this partitioning scheme',
		execute: executeInstallationtemplatePartitionschemePartitionGetGet,
		description: descriptionInstallationtemplatePartitionschemePartitionGetGet,
		show: false,
	},
	],
);

export { description, execute };
