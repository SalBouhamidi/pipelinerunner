import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as path from 'path';

@Injectable()
export class GitService {
  async createBranchAndPushFile(jsonFilePath: string): Promise<string> {
    try {
      const branchName = `feature/test/${Date.now()}`;

      const commands = [
        `git checkout main`,
        `git checkout -b ${branchName}`,
        `git add ${jsonFilePath}`,
        `git commit -m "add test report for ${jsonFilePath}"`,
        `git push -u origin ${branchName}`,
      ];

      for (const cmd of commands) {
        await this.executeCommand(cmd);
      }

      return branchName;
    } catch (e) {
      console.error('ops errorrr', e);
      throw new Error(`git operation failed ++++: ${e.message}`);
    }
  }

  private executeCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          console.warn(stderr);
        }
        resolve(stdout);
      });
    });
  }
}
