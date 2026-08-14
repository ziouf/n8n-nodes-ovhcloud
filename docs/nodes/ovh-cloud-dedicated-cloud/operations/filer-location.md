# OVH Cloud Dedicated Cloud — Get Datastore Location

> Opération `filerLocation` · Fichier source : `nodes/OvhCloudDedicatedCloud/filer/filerLocation.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{filerId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `filerId` | number | Oui |
| `node` | options | — |
| `Master` | — | — |
| `Slave` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
