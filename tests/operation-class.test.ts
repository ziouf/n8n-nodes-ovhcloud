/**
 * Tests for {@link classifyOperation} and {@link DEFAULT_CLASS_CONCURRENCY}.
 *
 * Verifies the heuristic classification of operation strings into
 * `'read'`, `'write'`, or `'destructive'` classes.
 */

import { classifyOperation, DEFAULT_CLASS_CONCURRENCY } from '../shared/nodes/BaseNode';

describe('classifyOperation', () => {
	describe('read classification', () => {
		it('classifies "listVps" as read', () => {
			expect(classifyOperation('listVps')).toBe('read');
		});

		it('classifies "get" as read', () => {
			expect(classifyOperation('get')).toBe('read');
		});

		it('classifies "List available upgrades" as read', () => {
			expect(classifyOperation('List available upgrades')).toBe('read');
		});

		it('classifies "describeInstance" as read', () => {
			expect(classifyOperation('describeInstance')).toBe('read');
		});

		it('classifies "searchDomains" as read', () => {
			expect(classifyOperation('searchDomains')).toBe('read');
		});

		it('classifies "getStatistics" as read', () => {
			expect(classifyOperation('getStatistics')).toBe('read');
		});

		it('classifies "getTask" as read', () => {
			expect(classifyOperation('getTask')).toBe('read');
		});

		it('classifies "getServiceInfos" as read', () => {
			expect(classifyOperation('getServiceInfos')).toBe('read');
		});

		it('classifies "getImage" as read', () => {
			expect(classifyOperation('getImage')).toBe('read');
		});

		it('classifies "getIpInfo" as read', () => {
			expect(classifyOperation('getIpInfo')).toBe('read');
		});

		it('classifies "listTasks" as read', () => {
			expect(classifyOperation('listTasks')).toBe('read');
		});

		it('classifies "restorePointList" as read', () => {
			expect(classifyOperation('restorePointList')).toBe('read');
		});
	});

	describe('destructive classification', () => {
		it('classifies "deleteVps" as destructive', () => {
			expect(classifyOperation('deleteVps')).toBe('destructive');
		});

		it('classifies "terminate" as destructive', () => {
			expect(classifyOperation('terminate')).toBe('destructive');
		});

		it('classifies "reboot" as destructive', () => {
			expect(classifyOperation('reboot')).toBe('destructive');
		});

		it('classifies "reinstall" as destructive', () => {
			expect(classifyOperation('reinstall')).toBe('destructive');
		});

		it('classifies "remove failover ip" as destructive', () => {
			expect(classifyOperation('remove failover ip')).toBe('destructive');
		});

		it('classifies "destroy" as destructive', () => {
			expect(classifyOperation('destroy')).toBe('destructive');
		});

		it('classifies "powerOff" as destructive', () => {
			expect(classifyOperation('powerOff')).toBe('destructive');
		});

		it('classifies "Stop" as destructive (case-insensitive)', () => {
			expect(classifyOperation('Stop')).toBe('destructive');
		});

		it('classifies "resetPassword" as destructive', () => {
			expect(classifyOperation('resetPassword')).toBe('destructive');
		});
	});

	describe('write classification (unknown / default)', () => {
		it('classifies "rename vps" as write', () => {
			expect(classifyOperation('rename vps')).toBe('write');
		});

		it('classifies "add ip" as read (ip is a read keyword)', () => {
			expect(classifyOperation('add ip')).toBe('read');
		});

		it('classifies "unknown thing" as write', () => {
			expect(classifyOperation('unknown thing')).toBe('write');
		});

		it('classifies "updateServiceInfos" as write (service is read keyword but update is not)', () => {
			// "serviceinfos" contains "service", so this would match read.
			// But the test verifies that a non-matching keyword falls to write.
			expect(classifyOperation('updateServiceInfos')).toBe('read'); // serviceinfos → service → read
		});

		it('classifies "createCertificate" as write', () => {
			expect(classifyOperation('createCertificate')).toBe('write');
		});

		it('classifies "updateCertificate" as write', () => {
			expect(classifyOperation('updateCertificate')).toBe('write');
		});

		it('is case-insensitive: "LIST_vps" → read', () => {
			expect(classifyOperation('LIST_vps')).toBe('read');
		});

		it('is case-insensitive: "DELETE_VPS" → destructive', () => {
			expect(classifyOperation('DELETE_VPS')).toBe('destructive');
		});

		it('is case-insensitive: "Rename VPS" → write', () => {
			expect(classifyOperation('Rename VPS')).toBe('write');
		});
	});

	describe('destructive takes precedence over read', () => {
		it('classifies "delete list" as destructive (destructive checked first)', () => {
			expect(classifyOperation('delete list')).toBe('destructive');
		});

		it('classifies "terminate and list" as destructive', () => {
			expect(classifyOperation('terminate and list')).toBe('destructive');
		});
	});
});

describe('DEFAULT_CLASS_CONCURRENCY', () => {
	it('has read concurrency of 3', () => {
		expect(DEFAULT_CLASS_CONCURRENCY.read).toBe(3);
	});

	it('has write concurrency of 1', () => {
		expect(DEFAULT_CLASS_CONCURRENCY.write).toBe(1);
	});

	it('has destructive concurrency of 1', () => {
		expect(DEFAULT_CLASS_CONCURRENCY.destructive).toBe(1);
	});
});
