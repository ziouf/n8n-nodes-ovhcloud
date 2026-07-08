/**
 * Tests for OVH Cloud node description functions.
 *
 * Verifies that all node description functions return correct
 * structure with proper resource and operation options.
 */

import { description as descriptionVps } from '../nodes/OvhCloudVps';
import { description as descriptionMe } from '../nodes/OvhCloudMe';
import { description as descriptionDomain } from '../nodes/OvhCloudDomain';
import { description as descriptionDbaas } from '../nodes/OvhCloudDbaas';

describe('VPS node description', () => {
	it('should return an array of properties', () => {
		const desc = descriptionVps({});
		expect(Array.isArray(desc)).toBe(true);
		expect(desc.length).toBeGreaterThan(0);
	});

	it('should include VPS Resource property', () => {
		const desc = descriptionVps({});
		const resourceProp = desc.find((p) => p.name === 'vpsResource');
		expect(resourceProp).toBeDefined();
		expect(resourceProp?.type).toBe('options');
		expect(resourceProp?.default).toBe('vps');
	});

	it('should include VPS Operation property', () => {
		const desc = descriptionVps({});
		const operationProp = desc.find((p) => p.name === 'vpsOperation');
		expect(operationProp).toBeDefined();
		expect(operationProp?.type).toBe('options');
	});

	it('should have at least 10 resource options', () => {
		const desc = descriptionVps({});
		const resourceProp = desc.find((p) => p.name === 'vpsResource');
		expect(resourceProp?.options).toBeDefined();
		expect((resourceProp?.options as INodeProperties[]).length).toBeGreaterThan(10);
	});

	it('should have displayOptions on operation properties', () => {
		const desc = descriptionVps({});
		const operationProp = desc.find((p) => p.name === 'vpsOperation');
		expect(operationProp?.displayOptions).toBeDefined();
	});
});

describe('Me node description', () => {
	it('should return an array of properties', () => {
		const desc = descriptionMe({});
		expect(Array.isArray(desc)).toBe(true);
		expect(desc.length).toBeGreaterThan(0);
	});

	it('should include Me Resource property', () => {
		const desc = descriptionMe({});
		const resourceProp = desc.find((p) => p.name === 'meResource');
		expect(resourceProp).toBeDefined();
		expect(resourceProp?.type).toBe('options');
	});

	it('should include Me Operation property', () => {
		const desc = descriptionMe({});
		const operationProp = desc.find((p) => p.name === 'meOperation');
		expect(operationProp).toBeDefined();
		expect(operationProp?.type).toBe('options');
	});

	it('should have at least 5 resource options', () => {
		const desc = descriptionMe({});
		const resourceProp = desc.find((p) => p.name === 'meResource');
		expect(resourceProp?.options).toBeDefined();
		expect((resourceProp?.options as INodeProperties[]).length).toBeGreaterThan(5);
	});
});

describe('Domain node description', () => {
	it('should return an array of properties', () => {
		const desc = descriptionDomain({});
		expect(Array.isArray(desc)).toBe(true);
		expect(desc.length).toBeGreaterThan(0);
	});

	it('should include Domain Operation property', () => {
		const desc = descriptionDomain({});
		const operationProp = desc.find((p) => p.name === 'domainOperation');
		expect(operationProp).toBeDefined();
		expect(operationProp?.type).toBe('options');
	});

	it('should have at least 3 operation options', () => {
		const desc = descriptionDomain({});
		const operationProp = desc.find((p) => p.name === 'domainOperation');
		expect(operationProp?.options).toBeDefined();
		expect((operationProp?.options as INodeProperties[]).length).toBeGreaterThanOrEqual(2);
	});
});

describe('Dbaas node description', () => {
	it('should return an array of properties', () => {
		const desc = descriptionDbaas({});
		expect(Array.isArray(desc)).toBe(true);
		expect(desc.length).toBeGreaterThan(0);
	});

	it('should include Dbaas Operation property', () => {
		const desc = descriptionDbaas({});
		const operationProp = desc.find((p) => p.name === 'dbaasOperation');
		expect(operationProp).toBeDefined();
		expect(operationProp?.type).toBe('options');
	});

	it('should have at least 3 operation options', () => {
		const desc = descriptionDbaas({});
		const operationProp = desc.find((p) => p.name === 'dbaasOperation');
		expect(operationProp?.options).toBeDefined();
		expect((operationProp?.options as INodeProperties[]).length).toBeGreaterThanOrEqual(2);
	});
});

describe('Description function consistency', () => {
	it('should always return a non-empty array', () => {
		expect(descriptionVps({}).length).toBeGreaterThan(0);
		expect(descriptionMe({}).length).toBeGreaterThan(0);
		expect(descriptionDomain({}).length).toBeGreaterThan(0);
		expect(descriptionDbaas({}).length).toBeGreaterThan(0);
	});

	it('should return consistent results across multiple calls', () => {
		const desc1 = descriptionVps({});
		const desc2 = descriptionVps({});
		expect(desc1.length).toBe(desc2.length);
		expect(desc1[0].name).toBe(desc2[0].name);
	});

	it('should not mutate internal state between calls', () => {
		const desc1 = descriptionMe({});
		const desc2 = descriptionMe({});
		expect(desc1).toEqual(desc2);
	});
});
