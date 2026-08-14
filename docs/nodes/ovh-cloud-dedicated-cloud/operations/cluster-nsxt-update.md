# OVH Cloud Dedicated Cloud — Update NSX-T Configuration on Cluster

> Opération `clusterNsxtUpdate` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/cluster/clusterNsxtUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicatedCloud/{serviceName}{datacenterId}{clusterId}` |

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
