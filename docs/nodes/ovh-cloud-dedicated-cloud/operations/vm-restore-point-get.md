# OVH Cloud Dedicated Cloud — Get Restore Point

> Opération `vmRestorePointGet` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmRestorePointGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}{restorePointId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |
| `restorePointId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
