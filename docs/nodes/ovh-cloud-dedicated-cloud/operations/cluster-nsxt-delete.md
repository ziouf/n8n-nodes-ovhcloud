# OVH Cloud Dedicated Cloud — Unconfigure NSX-T on Cluster

> Opération `clusterNsxtDelete` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/cluster/clusterNsxtDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/dedicatedCloud/{serviceName}{datacenterId}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `clusterId` | number | Oui |
| `datacenterId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
