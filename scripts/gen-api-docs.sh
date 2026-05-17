#!/usr/bin/env bash
set -euo pipefail

if ! command -v opencode >/dev/null 2>&1; then
    echo "Error: 'opencode' command not found in PATH." >&2
    exit 1
fi

if [ ! -d "api_docs" ]; then
    echo "Error: 'api_docs' directory not found." >&2
    exit 1
fi

# AGENT="technical-writer"
# MODEL="lemonade/user.Qwen3.5-27B-GGUF-Coder"
# MODEL="lemonade/user.OmniCoder-9B-GGUF"
MODEL="lemonade/user.Mistral-Small-4-119B-2603-GGUF"

for json_file in api_docs/*/*.json; do
    basename=$(basename "$json_file" .json)
    version=$(basename "$(dirname "$json_file")")

    if [ -f "docs/${version}/${basename}.md" ]; then
        echo "Documentation already exists for ${json_file}, skipping."
        continue
    fi

    echo "Processing file: ${json_file}"

    prompt=(
        "Write technical documentation in Markdown format from the given JSON input file."
        "The output file is 'docs/${version}/${basename}.md'."
        "Do not read any other files than the specified JSON input file."
        "DO NOT write code."
        "Do not produce a report, write directly to the output file."
    )

    opencode run --pure --agent "${AGENT:-technical-writer}" --model "${MODEL:-lemonade/user.OmniCoder-9B-GGUF}" \
        "${prompt[@]}" --file "${json_file}"
done
