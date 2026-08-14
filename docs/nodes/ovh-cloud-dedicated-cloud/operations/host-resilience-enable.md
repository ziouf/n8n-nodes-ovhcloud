# OVH Cloud Dedicated Cloud — Start Resilience Test

> Opération `hostResilienceEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostResilienceEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{hostId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `hostId` | number | Oui |
| `duration` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
