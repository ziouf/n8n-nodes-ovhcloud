/**
 * Advanced Sequential Mode Agent System
 *
 * Enforces strict sequential phase execution with mandatory business logic testing.
 * Each phase must complete before moving to the next, ensuring quality control.
 */

export interface PhaseDefinition {
	id: string;
	name: string;
	description: string;
	validationFn: () => Promise<boolean>;
}

/**
 * Agent that enforces strict sequential phase execution with mandatory business logic testing.
 *
 * Key design principles (from AGENTS.md):
 * - Each phase must complete and pass validation before the next begins
 * - Tests focus exclusively on business code, not framework functionality
 * - Phase closure is blocked until all quality gates pass
 */
export class SequentialPhaseAgent {
	private phases: Map<string, boolean>;

	constructor() {
		this.phases = new Map();
		// Initialize with known phase IDs for strict validation
		this.phases.set('phase1', false);
		this.phases.set('phase2', false);
		this.phases.set('phase3', false);
	}

	/**
	 * Execute phases in STRICT sequential order. Each phase must pass its business logic
	 * validation before the next one begins. If any phase fails, execution halts immediately
	 * and subsequent phases are NOT executed (sequential enforcement).
	 */
	async runSequentialPhases(phases: PhaseDefinition[]): Promise<void> {
		for (const phase of phases) {
			if (!this.phases.has(phase.id)) {
				throw new Error(`Phase ${phase.id} not recognized`);
			}

			console.log(`\n🚀 Starting Phase: [${phase.name}] (${phase.description})`);

			try {
				// Execute phase logic (placeholder for actual implementation)
				await this.executePhaseLogic(phase);

				// Run business logic validation - THIS IS THE MANDATORY GATE
				const isValid = await phase.validationFn();

				if (!isValid) {
					throw new Error(`Validation failed for phase: ${phase.id}`);
				}

				this.phases.set(phase.id, true);

				console.log(`\n✅ Phase completed successfully: [${phase.name}]`);
				console.log('   Status: ✓ VALIDATED - Proceeding to next phase\n');
			} catch (error) {
				// STRICT SEQUENTIAL ENFORCEMENT: Halt immediately on failure.
				// This is a business rule from AGENTS.md - cannot proceed when validation fails.
				const errorMessage = error instanceof Error ? error.message : String(error);
				console.error(`\n❌ Phase HALTED at [${phase.name}]: ${errorMessage}`);

				throw new Error(
					`Phase execution interrupted at ${phase.id}: ${errorMessage}. ` +
						'Cannot proceed to next phase until current phase is fully validated.',
				);
			}
		}

		console.log('\n' + '='.repeat(60));
		console.log('✅ ALL PHASES COMPLETED SUCCESSFULLY');
		console.log('='.repeat(60) + '\n');
	}

	/**
	 * Placeholder for phase-specific business logic execution.
	 * Override or extend this method based on the agent's use case.
	 */
	private async executePhaseLogic(_phase: PhaseDefinition): Promise<void> {
		// Custom phase logic goes here - represents actual implementation work
		await new Promise((resolve) => setTimeout(resolve, 10));
	}

	/** Check if a specific phase has been validated and completed. */
	isPhaseComplete(phaseId: string): boolean {
		return this.phases.get(phaseId) || false;
	}

	/** Get the complete state of all tracked phases (for reporting/verification). */
	getCompletedPhases(): Map<string, boolean> {
		// Return a shallow copy to prevent external mutation of internal state.
		return new Map(this.phases);
	}
}

export default SequentialPhaseAgent;
