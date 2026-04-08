#!/usr/bin/env bash
set -euo pipefail

if ! command -v opencode >/dev/null 2>&1; then
    echo "Erreur: la commande 'opencode' est introuvable dans le PATH." >&2
    exit 1
fi

if [ ! -d "api_docs" ]; then
    echo "Erreur: le dossier 'api_docs' est introuvable." >&2
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

    echo "Run for file : ${json_file}"

    prompt=(
        "Rédige la documentation technique au format Markdown à partir du fichier JSON donné en entrée."
        "Le fichier de sortie est 'docs/${version}/${basename}.md'."
        "Tu ne lis aucun autre fichier que le JSON spécifié en entrée."
        "INTERDICTION d'écrire du code."
        "Ne fais pas de rapport, écris directement dans le fichier de sortie."
    )

    opencode run --pure --agent "${AGENT:-technical-writer}" --model "${MODEL:-lemonade/user.OmniCoder-9B-GGUF}" \
        "${prompt[@]}" --file "${json_file}"
done
