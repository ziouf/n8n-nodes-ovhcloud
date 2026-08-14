# OVH Cloud Storage — Create Snapshot Policy

> Opération `snapshotPolicyCreatePost` · Fichier source : `nodes/OvhCloudStorage/snapshotPolicy/snapshotPolicyCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `description` | string | — |
| `name` | string | — |
| `isDefault` | boolean | — |
| `rules` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
