import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";

const DataTimeLine = () => {
  return (
    <Timeline color="grape" active={4} bulletSize={50} lineWidth={2}>
      <Timeline.Item pb={20} bullet={<IconGitBranch size={20} />} title="Upload csv file">
        <Text c="dimmed" size="md">
          You&apos;ve created new branch{" "}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{" "}
          from master
        </Text>
      </Timeline.Item>

      <Timeline.Item pb={20} bullet={<IconGitCommit size={20} />} title="Preview your data">
        <Text c="dimmed" size="md">
          You&apos;ve pushed 23 commits to
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item pb={20}
        title="Generate synthetic data"
        bullet={<IconGitPullRequest size={20} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="md">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item pb={20} title="Download report" bullet={<IconMessageDots size={20} />}>
        <Text c="dimmed" size="md">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{" "}
          left a code review on your pull request
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

export default DataTimeLine;
