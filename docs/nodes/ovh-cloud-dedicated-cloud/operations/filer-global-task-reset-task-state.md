# OVH Cloud Dedicated Cloud — Reset Task State (Global Datastore)

> Opération `filerGlobalTaskResetTaskState` · Fichier source : `nodes/OvhCloudDedicatedCloud/filer/filerGlobalTaskResetTaskState.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{filerId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `filerId` | number | Oui |
| `taskId` | number | Oui |
| `reason` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
