# OVH Cloud Dedicated Cloud — Request Host Replacement

> Opération `hostAddHostSpare` · Fichier source : `nodes/OvhCloudDedicatedCloud/host/hostAddHostSpare.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{hostId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `hostId` | number | Oui |
| `reason` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
