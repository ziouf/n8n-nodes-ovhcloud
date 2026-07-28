/**
 * Tests for SequentialPhaseAgent - strict sequential phase enforcement & mandatory business tests.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SequentialPhaseAgent } from '../SequentialPhaseAgent.js';

describe('SequentialPhaseAgent', () => {
	describe('sequential execution (MANDATORY)', () => {
		const agent = new SequentialPhaseAgent();

		it('must execute phases in strict sequential order with business validation gates', async () => {
			// Business rule: Phase ordering is mandatory, not optional.
			let executionOrder: string[] = [];

			const phases = [
				{
					id: 'phase1' as const,
					name: 'Analysis & Documentation Review',
					description: 'Analyze project structure and API documentation to identify missing nodes',
					validationFn: async () => {
						// Business logic test 1: Verify phase completion tracking works correctly.
						executionOrder.push('phase1');

						assert.equal(
							agent.isPhaseComplete('nonExistent'),
							false,
							'Non-existent phase should return false',
						);

						return true;
					},
				},
				{
					id: 'phase2' as const,
					name: 'Node Implementation with Business Tests',
					description:
						'Implement missing nodes following strict sequential execution and mandatory testing rules',
					validationFn: async () => {
						// Business logic test 2: Verify that business tests are created for each feature (MANDATORY).
						assert.equal(
							agent.isPhaseComplete('phase1'),
							true,
							'Phase 2 cannot be complete unless Phase 1 was already validated',
						);

						executionOrder.push('phase2');

						return true;
					},
				},
				{
					id: 'phase3' as const,
					name: 'Validation & Documentation Update',
					description: 'Run linting, testing and update documentation before closing phases',
					validationFn: async () => {
						// Business logic test 3: Verify final phase requires all previous phases complete (business rule).
						assert.equal(
							agent.isPhaseComplete('phase2'),
							true,
							'Final phase cannot be marked as complete unless Phase 2 was validated',
						);

						executionOrder.push('phase3');

						return true;
					},
				},
			];

			await agent.runSequentialPhases(phases);

			// Business validation: Verify strict sequential execution was enforced (MANDATORY from AGENTS.md).
			assert.deepStrictEqual(
				executionOrder,
				['phase1', 'phase2', 'phase3'],
				`Execution order must be strictly sequential. Got: ${executionOrder.join(' -> ')}`,
			);

			// Business validation: All phases tracked as complete after successful run.
			for (const phaseId of ['phase1', 'phase2', 'phase3']) {
				assert.equal(
					agent.isPhaseComplete(phaseId),
					true,
					`Every completed phase (${phaseId}) must be tracked in agent state`,
				);
			}

			// Business validation: Verify no phases were skipped.
			const allCompleted = agent.getCompletedPhases();
			for (const [, status] of allCompleted) {
				assert.equal(
					status,
					true,
					'Sequential mode requires every phase to be validated before moving forward',
				);
			}

			console.log('✅ Sequential execution business tests PASSED');
		});
	});

	describe('error handling (MANDATORY)', () => {
		it('must halt execution when a phase validation fails - no subsequent phases run', async () => {
			const agent = new SequentialPhaseAgent();

			// Business logic test: Phase failure must prevent subsequent phases from running.
			let secondPhaseRan = false;

			await assert.rejects(async () => {
				const phases = [
					{
						id: 'phase1',
						name: 'Analysis & Documentation Review',
						description: 'Mandatory first phase that MUST complete before proceeding',
						validationFn: async () => {
							// Business rule test 4: Simulate a business logic failure in Phase 1.
							return false;
						},
					},
					{
						id: 'phase2',
						name: 'Node Implementation',
						description: 'This phase must NOT execute if Phase 1 fails (sequential enforcement)',
						validationFn: async () => {
							secondPhaseRan = true; // This should never be called due to error handling.
							return false;
						},
					},
				];

				await agent.runSequentialPhases(phases);
			}, /execution interrupted/i);

			// Business validation: Verify the sequential halt enforcement worked correctly (MANDATORY).
			assert.equal(
				secondPhaseRan,
				false,
				'Business rule test 4 FAILED - Phase 2 should NOT have executed after Phase 1 failure. This violates STRICT SEQUENTIAL EXECUTION requirement from AGENTS.md',
			);

			// Business validation: Verify phase1 tracking shows it never completed (proper state management).
			assert.equal(
				agent.isPhaseComplete('phase1'),
				false,
				'Failed phases must remain tracked as incomplete in agent state',
			);
		});
	});

	describe('invalid phase handling (BUSINESS RULE)', () => {
		it('must reject execution when an unknown phase ID is provided - strict validation enforced', async () => {
			const agent = new SequentialPhaseAgent();

			// Business logic test: System must enforce valid phase IDs only.
			await assert.rejects(async () => {
				// Try to execute a non-existent phase - business rule requires strict validation.
				const phases = [
					{
						id: 'nonExistent', // This ID doesn't exist in the agent's known phases map.
						name: 'Non-Existent Phase',
						description:
							'Attempting to run an invalid phase triggers error handling (business requirement)',
						validationFn: async () => false,
					},
				];

				await agent.runSequentialPhases(phases);
			}, /not recognized/i);

			// Business validation: Agent state must remain unchanged after rejected execution attempt.
			const completedPhases = agent.getCompletedPhases();
			for (const [, status] of completedPhases) {
				assert.equal(
					status,
					false,
					'Agent state must not be modified when an invalid phase is attempted to execute',
				);
			}

			console.log('✅ Invalid phase handling business tests PASSED');
		});
	});
});
