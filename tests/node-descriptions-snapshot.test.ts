import { description as secretDescription } from '../nodes/OvhCloudSecret/index';
import { description as supplyDescription } from '../nodes/OvhCloudSupply/index';
import { description as contactDescription } from '../nodes/OvhCloudContact/index';
import { description as partnerDescription } from '../nodes/OvhCloudPartner/index';
import { description as startupDescription } from '../nodes/OvhCloudStartup/index';
import { description as emailProDescription } from '../nodes/OvhCloudEmailPro/index';
import { description as stackDescription } from '../nodes/OvhCloudStack/index';
import { description as vipDescription } from '../nodes/OvhCloudVip/index';
import { description as commercialCatalogDescription } from '../nodes/OvhCloudCommercialCatalog/index';
import { description as networkDefenseDescription } from '../nodes/OvhCloudNetworkDefense/index';
import { description as locationDescription } from '../nodes/OvhCloudLocation/index';
import { description as allDomDescription } from '../nodes/OvhCloudAllDom/index';
import { description as authDescription } from '../nodes/OvhCloudAuth/index';
import { description as newAccountDescription } from '../nodes/OvhCloudNewAccount/index';
import { description as veeamEnterprisePlusDescription } from '../nodes/OvhCloudVeeamEnterprisePlus/index';
import { description as metricsDescription } from '../nodes/OvhCloudMetrics/index';

describe('OvhCloud node descriptions (snapshot reference)', () => {
	it('OvhCloudSecret description({})', () => {
		expect(secretDescription({})).toMatchSnapshot();
	});

	it('OvhCloudSupply description({})', () => {
		expect(supplyDescription({})).toMatchSnapshot();
	});

	it('OvhCloudContact description({})', () => {
		expect(contactDescription({})).toMatchSnapshot();
	});

	it('OvhCloudPartner description({})', () => {
		expect(partnerDescription({})).toMatchSnapshot();
	});

	it('OvhCloudStartup description({})', () => {
		expect(startupDescription({})).toMatchSnapshot();
	});

	it('OvhCloudEmailPro description({})', () => {
		expect(emailProDescription({})).toMatchSnapshot();
	});

	it('OvhCloudStack description({})', () => {
		expect(stackDescription({})).toMatchSnapshot();
	});

	it('OvhCloudVip description({})', () => {
		expect(vipDescription({})).toMatchSnapshot();
	});

	it('OvhCloudCommercialCatalog description({})', () => {
		expect(commercialCatalogDescription({})).toMatchSnapshot();
	});

	it('OvhCloudNetworkDefense description({})', () => {
		expect(networkDefenseDescription({})).toMatchSnapshot();
	});

	it('OvhCloudLocation description({})', () => {
		expect(locationDescription({})).toMatchSnapshot();
	});

	it('OvhCloudAllDom description({})', () => {
		expect(allDomDescription({})).toMatchSnapshot();
	});

	it('OvhCloudAuth description({})', () => {
		expect(authDescription({})).toMatchSnapshot();
	});

	it('OvhCloudNewAccount description({})', () => {
		expect(newAccountDescription({})).toMatchSnapshot();
	});

	it('OvhCloudVeeamEnterprisePlus description({})', () => {
		expect(veeamEnterprisePlusDescription({})).toMatchSnapshot();
	});

	it('OvhCloudMetrics description({})', () => {
		expect(metricsDescription({})).toMatchSnapshot();
	});
});
