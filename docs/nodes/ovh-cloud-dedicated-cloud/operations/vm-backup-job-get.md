# OVH Cloud Dedicated Cloud — Get Virtual Machine Backup Job

> Opération `vmBackupJobGet` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmBackupJobGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
