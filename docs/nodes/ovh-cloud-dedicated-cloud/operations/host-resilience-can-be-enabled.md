# OVH Cloud Dedicated Cloud — Check if Resilience Test Can Be Performed

> Opération `hostResilienceCanBeEnabled` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostResilienceCanBeEnabled.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{hostId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `hostId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
