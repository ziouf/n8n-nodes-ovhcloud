# OVH Cloud Dedicated Cloud — Configure NSX-T on Cluster

> Opération `clusterNsxtCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/cluster/clusterNsxtCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{clusterId}` |

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
