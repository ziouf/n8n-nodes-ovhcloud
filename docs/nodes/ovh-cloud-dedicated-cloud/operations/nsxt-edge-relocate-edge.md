# OVH Cloud Dedicated Cloud — Relocate NSX-T Edge

> Opération `nsxtEdgeRelocateEdge` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/nsxtEdge/nsxtEdgeRelocateEdge.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{nsxtEdgeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `nsxtEdgeId` | number | Oui |
| `datastore` | string | — |
| `hostId` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
