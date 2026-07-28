/**
 * Advanced Sequential Mode Agent System - Comprehensive Example
 *
 * This demonstrates how to use the SequentialPhaseAgent for complex workflows:
 * 1. Analyze project & API documentation (Phase 1)
 * 2. Implement nodes with mandatory business tests (Phase 2)
 * 3. Validate, lint and update docs before closing phases (Phase 3)
 */

import { SequentialPhaseAgent } from '../SequentialPhaseAgent.js';

// Define the actual workflow for node implementation projects
const projectWorkflow = [
	{
		id: 'phase1',
		name: 'Analysis & Documentation Review',
		description: `Analyze project structure and API documentation to identify missing nodes.
    
MANDATORY CHECKLIST (Business Logic):
- Scan all existing node directories in the project
- Read complete API specification for target service  
- Compare implemented endpoints vs available endpoints
- Generate list of MISSING nodes that need implementation

This phase validates: Does the analysis correctly identify gaps?`,
		validationFn: async () => {
			// Simulate business logic test - verify analysis is comprehensive enough
			const missingNodes = ['OvhCloudEmailPro', 'OvhCloudMxPlan', 'OvhCloudSms'];

			console.log('📋 Phase 1 Analysis Results:');
			for (const node of missingNodes) {
				console.log(`   - ${node}: MISSING from project`);
			}

			// Business rule validation: Must identify at least the required nodes
			if (missingNodes.length === 0) {
				throw new Error('Analysis incomplete - no missing nodes identified');
			}

			return true;
		},
	},

	{
		id: 'phase2',
		name: 'Node Implementation with Mandatory Business Tests',
		description: `Implement each missing node following STRICT SEQUENTIAL EXECUTION rules.

MANDATORY RULES (from AGENTS.md):
1. Write tests for EVERY new feature/implementation BEFORE marking phase complete
2. Focus tests EXCLUSIVELY on business logic, not framework functionality  
3. Each test must cover nominal cases AND edge cases
4. Cannot proceed to Phase 3 until ALL node implementations have passing tests

This phase validates: Are all required nodes implemented with proper tests?`,
		validationFn: async () => {
			// Business logic test - verify each implementation has corresponding tests
			const implementations = [
				{ name: 'OvhCloudEmailPro', hasTests: true },
				{ name: 'OvhCloudMxPlan', hasTests: false }, // Simulating missing test
				{ name: 'OvhCloudSms', hasTests: true },
			];

			console.log('🔧 Phase 2 Implementation Status:');

			let allImplemented = true;
			for (const impl of implementations) {
				const status = impl.hasTests ? '✅' : '❌';
				console.log(`   ${status} ${impl.name}: Tests present? ${impl.hasTests}`);

				if (!impl.hasTests) {
					allImplemented = false;
				}
			}

			// Business rule validation: All implementations must have tests (MANDATORY from AGENTS.md)
			if (!allImplemented) {
				throw new Error('Implementation incomplete - some nodes lack mandatory business tests');
			}

			return true;
		},
	},

	{
		id: 'phase3',
		name: 'Validation, Linting & Documentation Update',
		description: `Run quality gates and update documentation before closing phases.

MANDATORY CHECKLIST (Business Logic):
- Execute project linter - must show 0 errors or only auto-fixable warnings
- Run all tests via test framework - ALL must pass (100% green)  
- Update API reference docs to reflect new nodes
- Verify no regressions in existing functionality

This phase validates: Does the final implementation meet quality standards?`,
		validationFn: async () => {
			// Business logic test - simulate linting and testing results
			const lintResults = { errors: 0, warningsFixable: 2 };
			const testResults = { passed: true, totalTests: 47, failedTests: [] };

			console.log('✅ Phase 3 Validation Results:');
			console.log(
				`   Linting: ${lintResults.errors === 0 ? 'PASS' : 'FAIL'} (errors: ${lintResults.errors}, fixable warnings: ${lintResults.warningsFixable})`,
			);
			console.log(
				`   Testing: ${testResults.passed ? 'PASS' : 'FAIL'} (${testResults.totalTests} tests passed, ${testResults.failedTests.length} failed)`,
			);

			// Business rule validation: Linting must pass (0 errors) AND testing must be 100% green
			if (lintResults.errors > 0 || !testResults.passed) {
				throw new Error(
					'Quality gates failed - cannot close phase with linting errors or failing tests',
				);
			}

			// Business rule validation: Documentation must reflect all implemented nodes
			const documentationUpdated = true; // Simulated check

			if (!documentationUpdated) {
				throw new Error(
					'Documentation incomplete - API reference not updated to match implementations',
				);
			}

			return true;
		},
	},
];

// Execute the workflow with strict sequential enforcement
async function runProjectWorkflow() {
	const agent = new SequentialPhaseAgent();

	console.log('🚀 Starting Advanced Sequential Mode Agent Workflow\n');
	console.log('='.repeat(60));
	console.log('Mode: STRICT SEQUENTIAL EXECUTION WITH MANDATORY TESTING');
	console.log('Rule: Cannot proceed to next phase until current is validated');
	console.log('='.repeat(60) + '\n');

	try {
		await agent.runSequentialPhases(projectWorkflow);

		console.log('\n✅ ALL PHASES COMPLETED SUCCESSFULLY');
		console.log('Project workflow finished with strict quality enforcement.\n');

		// Final business validation: Verify all phases tracked correctly
		const completedPhases = agent.getCompletedPhases();
		console.log('📊 Phase Completion Summary:');
		for (const [id, status] of completedPhases.entries()) {
			console.log(`   ${status ? '✅' : '❌'} ${id}: ${status}`);
		}
	} catch (error) {
		console.error('\n❌ WORKFLOW INTERRUPTED');
		console.error('Error:', error.message);

		// Business rule: Report which phases completed before failure
		const completedPhases = agent.getCompletedPhases();
		console.log('\n📊 Phase Status at Failure Point:');
		for (const [id, status] of completedPhases.entries()) {
			if (status) {
				console.log(`   ✅ ${id}: Completed successfully`);
			} else {
				console.log(`   ❌ ${id}: NOT COMPLETED - workflow halted here`);
			}
		}

		process.exit(1);
	}
}

// Run the example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
	runProjectWorkflow();
}

export default projectWorkflow;
